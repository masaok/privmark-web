import { Divider, Paper, Table, TableContainer, TableHead } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'

/* istanbul ignore next */
Chart.register(...registerables)

import { customTheme } from 'themes/default'
import { DashboardSideCard } from './DashboardSideCard'

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'grid',
      width: '100%',
      // height: '100vh',
      // width: '100vw',
      // https://stackoverflow.com/questions/45870323/does-css-grid-have-a-flex-grow-function
      gridTemplate: `
        "main right" auto  /* height set by content */
        / 2fr 1fr
      `,

      gridGap: theme.spacing(3),

      padding: theme.spacing(3),

      backgroundColor: customTheme.content.backgroundColor,
    },

    // Grid Panels
    gridPanel: {
      // padding: theme.spacing(1),
    },

    mainGrid: {
      gridArea: 'main',
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },

    rightGrid: {
      gridArea: 'right',
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
    },

    // Paper Cards
    paper: {
      width: '100%',
      padding: theme.spacing(2),
      marginBottom: theme.spacing(3), // match gridGap and padding
    },

    cardTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: customTheme.content.color,
      marginBottom: theme.spacing(1.5),
    },

    cardText: {
      fontSize: '1.05rem',
    },

    // Charts
    chart: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      padding: theme.spacing(3),
      // backgroundColor: 'pink',
      borderRadius: theme.spacing(1),
      // border: '1px solid #DDD',
    },

    // Tables
    tableContainerRoot: {
      border: 0,
      borderColor: 'white',
    },

    table: {
      // minWidth: 650,
      border: 0,
      borderColor: 'white',
    },

    tableCell: {
      fontSize: '.75rem',
      fontWeight: 'bold',
      whiteSpace: 'nowrap',
      border: 0,
    },

    // Right Sidebar
    sideCardHeader: {
      // paddingBottom: theme.spacing(2),
    },

    sideCardDivider: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
  }),
  { name: 'DashboardContent' }
)

const labels = ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G']
const barData = {
  labels: labels,
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)',
      ],
      borderWidth: 1,
    },
  ],
}

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]

export const DashboardContent = (props: any) => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <div className={classes.mainGrid}>
        <Paper className={classes.paper} elevation={4}>
          <div className={classes.cardTitle}>Social/Platform Software PE & VC Deal Activity</div>
          <div className={classes.cardText}>
            There has been $251M capital invested in Social/Platform Software during <b>Jul 2021</b>
            . A 25.67% decrease from Jun 2021.
          </div>
          <div className={classes.chart}>
            <Bar data={barData} />
          </div>
        </Paper>
        <Paper className={classes.paper} elevation={4}>
          <div className={classes.cardTitle}>Social/Platform Software PE & VC Deal Activity</div>
          <div className={classes.cardText}>
            There has been $251M capital invested in Social/Platform Software during <b>Jul 2021</b>
            . A 25.67% decrease from Jun 2021.
          </div>
          <div className={classes.chart}>
            <Bar data={barData} />
          </div>
        </Paper>
        <Paper className={classes.paper} elevation={4}>
          <div className={classes.cardTitle}>Social/Platform Software PE & VC Deal Activity</div>
          <div className={classes.cardText}>
            There has been $251M capital invested in Social/Platform Software during <b>Jul 2021</b>
            . A 25.67% decrease from Jun 2021.
          </div>
          <div className={classes.chart}>
            <Bar data={barData} />
          </div>
        </Paper>
      </div>
      <div className={classes.rightGrid}>
        <DashboardSideCard />
        <DashboardSideCard />
        <DashboardSideCard />
        <DashboardSideCard />
        <DashboardSideCard />
      </div>
    </div>
  )
}
