import { useEffect, useState } from 'react'

import { CredentialResponse, GoogleLogin } from '@react-oauth/google'

import { DateTime } from 'luxon'

import * as Realm from 'realm-web'

import { Button, makeStyles } from '@material-ui/core'
import {
  APP_ID,
  USER_DATA_CLUSTER_NAME,
  USER_DATA_COLLECTION_NAME,
  USER_DATA_DATABASE_NAME,
} from 'utils/constants'

/**
 * https://www.npmjs.com/package/@react-oauth/google
 * https://www.mongodb.com/docs/realm/web/authenticate/#google-authentication
 */

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      margin: theme.spacing(1),
    },

    title: {
      fontSize: 20,
    },

    buttons: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
    },
  }),
  { name: 'OauthSimpleWithRealm' }
)

export const OauthSimpleWithRealm = (props: any) => {
  const classes = useStyles(props)

  const [dirty, setDirty] = useState(false)

  // Fetch Custom User Data
  useEffect(() => {
    const app = new Realm.App({ id: APP_ID })
    const customData = app.currentUser?.customData

    console.log('CUSTOM DATA: ', customData)

    setDirty(false)
  }, [dirty])

  // Attempt to fetch all user data (which should not be allowed)
  useEffect(() => {
    const fetchData = async () => {
      const app = new Realm.App({ id: APP_ID })
      const mongodb = app.currentUser?.mongoClient(USER_DATA_CLUSTER_NAME)
      const collection = mongodb?.db(USER_DATA_DATABASE_NAME).collection(USER_DATA_COLLECTION_NAME)

      const findResult = await collection?.find()

      console.log('FIND RESULT: ', findResult)

      setDirty(false)
    }
    fetchData()
  })

  const handleLogin = async (response: CredentialResponse) => {
    const { credential } = response

    if (credential) {
      const app = new Realm.App({ id: APP_ID })
      const credentials = Realm.Credentials.google({ idToken: credential })
      const user = await app.logIn(credentials)
      console.log('REALM USER LOGGED IN: ', user)
      setDirty(true)
    }
  }

  const insertData = async () => {
    const app = new Realm.App({ id: APP_ID })
    const mongodb = app.currentUser?.mongoClient(USER_DATA_CLUSTER_NAME)
    const collection = mongodb?.db(USER_DATA_DATABASE_NAME).collection(USER_DATA_COLLECTION_NAME)

    console.log('CURRENT USER: ', app.currentUser)

    const insertResult = await collection?.insertOne({
      userId: app.currentUser?.id,
      name: app.currentUser?.profile.name,
      timestamp: DateTime.local().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS),
    })
    console.log('INSERT RESULT: ', insertResult)
  }

  return (
    <div className={classes.root}>
      <div>
        <GoogleLogin
          useOneTap={true}
          onSuccess={response => handleLogin(response)}
          onError={() => {
            console.log('Login Failed')
          }}
        />
      </div>
      <div className={classes.title}>Some Cool PWA App</div>
      <div className={classes.buttons}>
        <Button variant="contained" color="primary" onClick={insertData}>
          Insert Data
        </Button>
      </div>
    </div>
  )
}
