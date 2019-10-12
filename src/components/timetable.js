import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import lime from '@material-ui/core/colors/lime';
import pink from '@material-ui/core/colors/pink';

const weekDays = [ 'lunes', 'martes', 'miércoles', 'jueves', 'viernes' ]
const dayHours = [ '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20' ]

const TimetableHeaderCell = withStyles(theme => ({
  head: {
    backgroundColor: lime[400],
  },
  // body: {
  //   fontSize: 18,
  // },
}))(TableCell);

const TimetableRowHeaderCell = withStyles(theme => ({
  body: {
    backgroundColor: lime[200],
  },
}))(TableCell);

const TimetableSelectedCell = withStyles(theme => ({
  body: {
    backgroundColor: pink[400],
    // border: '1px solid white'
  },
}))(TableCell);

const TimetableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  slimCell: {
    padding: '3px 24px 3px 16px'
  }
}));

function Timetable({ schedules }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={0}>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TimetableHeaderCell></TimetableHeaderCell>
            {weekDays.map(day => (
              <TimetableHeaderCell key={day} align="center">{day.toUpperCase()}</TimetableHeaderCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {dayHours.map(hour => (
            <TimetableRow key={hour}>
              <TimetableRowHeaderCell component="th" scope="row" align="right" className={classes.slimCell}>
                {hour}
              </TimetableRowHeaderCell>
              {weekDays.map(day => {
                // console.log("****")
                if (schedules[day].some(slot => slot.to === hour )) {
                  return <TimetableSelectedCell key={`${day}-${hour}`} className={classes.slimCell}></TimetableSelectedCell>
                } else {
                  return <TableCell key={`${day}-${hour}`} className={classes.slimCell}></TableCell>
                }
              })}
            </TimetableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default Timetable