import React, { useState, useEffect } from 'react'
import Selector from '../components/selector'
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';

import { useData } from '../data/data'
import Timetable from '../components/timetable'

const useStyles = makeStyles(theme => ({
  floatRight: {
    float: 'right',
  },
  detail: {
    padding: theme.spacing(3, 2),
  },
  lighter: {
    fontWeight: 'lighter'
  }
}));

function Professor() {
  const classes = useStyles();
  const { professors, subjects, getSupportProffessors } = useData()
  const [selected, setSelected] = useState(null)
  const [ supportProfessors, setSupportProfessors ] = useState([])

  useEffect(() => {
    if (selected) {
      getSupportProfessors(selected.professor)
    }
  }, [selected])

  const handleChange = e => {
    setSelected(e.target.value)
  }

  const getSupportProfessors = professorId => {
    console.log("getSupportProffessors(professorId)")
    console.log(getSupportProffessors(professorId))
  }

  return (
    <>
      <Typography variant="h6" align="center" color="textSecondary" component="p" className={classes.lighter}>
        Select a subject to see the availability of support professors
      </Typography>
      <br />
      <Container maxWidth="md" component="main">
        <Selector data={subjects} selected={selected} handleChange={handleChange} />
        <br />
        <br />
        {selected && (
          <Paper className={classes.detail}>
            <Typography variant="h5" component="h3" className={classes.lighter}>
              {selected.name}
            </Typography>
            <br />
            {/* <Timetable schedules={selected.schedules} /> */}
          </Paper>
        )}
      </Container>
    </>
  )
}

export default Professor