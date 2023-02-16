import { useEffect, useState } from 'react'
import { Divider, Paper, Table, TableContainer, TableHead } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'

/* istanbul ignore next */
Chart.register(...registerables)

import { customTheme } from 'themes/default'
import { DashboardSideCard } from './DashboardSideCard'
import { LineChart } from 'components/charts/LineChart'
import { PieChartHollow } from 'components/charts/PieChartHollow'
import { LineChartFilled } from 'components/charts/LineChartFilled'

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
      borderRadius: theme.spacing(1),
      // position: 'relative',  // does not cause graphs to re-render
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
const initBarData = {
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

export const DashboardContent = (props: any) => {
  const classes = useStyles(props)

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })

  const [barData, setBarData] = useState(initBarData)

  useEffect(() => {
    const handleResize = () => {
      // console.log('RESIZING')
      // setBarData({
      //   ...barData,
      //   datasets: [
      //     {
      //       ...barData.datasets[0],
      //       data: [1, 2, 3, 4, 5, 6],
      //     },
      //   ],
      // })

      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }

    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <div className={classes.root}>
      <div className={classes.mainGrid}>
        <Paper className={classes.paper} elevation={4}>
          <div className={classes.cardTitle}>Social/Platform Software PE & VC Deal Activity</div>
          <div className={classes.cardText}>
            There has been $251M capital invested in Social/Platform Software during <b>Jul 2021</b>
            . A 25.67% decrease from Jun 2021. {dimensions.width}
          </div>
          <div className={classes.chart}>
            {/* <Bar data={barData} /> */}
            <LineChart />
          </div>
        </Paper>
        <Paper className={classes.paper} elevation={4}>
          <div className={classes.cardTitle}>Social/Platform Software PE & VC Deal Activity</div>
          <div className={classes.cardText}>
            There has been $251M capital invested in Social/Platform Software during <b>Jul 2021</b>
            . A 25.67% decrease from Jun 2021.
          </div>
          <div className={classes.chart}>
            <PieChartHollow />
          </div>
        </Paper>
        <Paper className={classes.paper} elevation={4}>
          <div className={classes.cardTitle}>Social/Platform Software PE & VC Deal Activity</div>
          <div className={classes.cardText}>
            There has been $251M capital invested in Social/Platform Software during <b>Jul 2021</b>
            . A 25.67% decrease from Jun 2021.
          </div>
          <div className={classes.chart}>
            {/* <Bar data={barData} /> */}
            <LineChartFilled />
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
