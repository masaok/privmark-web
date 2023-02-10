import { Divider, Paper, Table, TableContainer, TableHead } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

import { customTheme } from 'themes/default'

const useStyles = makeStyles(
  theme => ({
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
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
    },
  }),
  { name: 'DashboardSideCard' }
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

export const DashboardSideCard = (props: any) => {
  const classes = useStyles(props)

  return (
    <Paper className={classes.paper} elevation={4}>
      <div className={classes.sideCardHeader}>
        <div className={classes.cardTitle}>Recent Activities and Updates</div>
        <div className={classes.cardText}>As of 06-Sep-2021</div>
      </div>

      <Divider className={classes.sideCardDivider} />

      {/* @ts-ignore */}
      <TableContainer
        style={{ border: 0, borderColor: 'white' }}
        classes={{
          root: classes.tableContainerRoot,
        }}
      >
        <Table className={classes.table} aria-label="simple table" size="small">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}>Dessert (100g serving)</TableCell>
              <TableCell className={classes.tableCell} align="right">
                Calories
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell className={classes.tableCell} component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell className={classes.tableCell} align="right">
                  {row.calories}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
