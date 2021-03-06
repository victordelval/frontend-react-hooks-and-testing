import React from "react";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import lime from "@material-ui/core/colors/lime";
import pink from "@material-ui/core/colors/pink";

const weekDays = ["lunes", "martes", "miércoles", "jueves", "viernes"];
const weekDay = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
const dayHours = [
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20"
];

const TimetableHeaderCell = withStyles(theme => ({
  head: {
    backgroundColor: lime[400]
  }
}))(TableCell);

const TimetableRowHeaderCell = withStyles(theme => ({
  body: {
    backgroundColor: lime[100]
  }
}))(TableCell);

const TimetableSelectedCell = withStyles(theme => ({
  body: {
    backgroundColor: pink[400],
    color: "white",
    // border: '1px solid white'
  }
}))(TableCell);

const TimetableSelectedNotAvailableCell = withStyles(theme => ({
  body: {
    backgroundColor: pink[100],
    color: "white"
    // border: '1px solid white'
  }
}))(TableCell);

const TimetableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  slimCell: {
    padding: "1px 24px 1px 16px"
  }
}));

function Timetable({ schedules, namedSlots, onlyToday }) {
  const classes = useStyles();

  function getTodayConfig() {
    var today = new Date();
    return [weekDay[today.getDay()]]
  }

  function availableFromNow(hour) {
    var today = new Date();
    return today.getHours() <= hour;
  }

  const dataDays = !onlyToday ? weekDays : getTodayConfig()
  return (
    <Paper className={classes.root} elevation={0}>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TimetableHeaderCell style={{ width: '5%' }}></TimetableHeaderCell>
            {dataDays.map(day => (
              <TimetableHeaderCell key={day} align="center">
                {day.toUpperCase()}
              </TimetableHeaderCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {dayHours.map(hour => (
            <TimetableRow key={hour}>
              <TimetableRowHeaderCell
                component="th"
                scope="row"
                align="center"
                className={classes.slimCell}
              >
                {hour}
              </TimetableRowHeaderCell>
              {dataDays.map(day => {
                let professor;
                const checkDaySlot = schedules[day].some(slot => {
                  const check = slot.from === hour;
                  if (check) professor = slot.professor;
                  return check;
                });
                if (checkDaySlot) {
                  if (onlyToday && !availableFromNow(hour)) {
                    return (
                      <TimetableSelectedNotAvailableCell
                        key={`${day}-${hour}`}
                        className={classes.slimCell}
                        align="center"
                      >
                        {namedSlots && <small>{professor}</small>}
                      </TimetableSelectedNotAvailableCell>
                    );
                  } else {
                    return (
                      <TimetableSelectedCell
                        key={`${day}-${hour}`}
                        className={classes.slimCell}
                        align="center"
                      >
                        {namedSlots && <small>{professor}</small>}
                      </TimetableSelectedCell>
                    );
                  }
                } else {
                  return (
                    <TableCell
                      key={`${day}-${hour}`}
                      className={classes.slimCell}
                    ></TableCell>
                  );
                }
              })}
            </TimetableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default Timetable;
