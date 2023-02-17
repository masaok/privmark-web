import { useState, useEffect } from 'react'
import { signInWithPopup, GoogleAuthProvider, signOut, User as FirebaseUser } from 'firebase/auth'
import { auth } from '../firebaseConfig'

const signInWrapper = async () => {
  try {
    const result = signInWithPopup(auth, new GoogleAuthProvider())
  } catch (error) {
    console.log(error)
  }
}

export function SignIn() {
  return <button onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}>Sign In</button>
}

export function SignOut() {
  return (
    <div>
      Hello, {auth.currentUser?.displayName} &nbsp;
      <button onClick={() => signOut(auth)}>Sign Out</button>
    </div>
  )
}

export function useAuthentication() {
  const [user, setUser] = useState<FirebaseUser | null>(null) // https://stackoverflow.com/a/69048952
  useEffect(() => {
    return auth.onAuthStateChanged(user => {
      user ? setUser(user) : setUser(null)
    })
  }, [])
  return user
}
