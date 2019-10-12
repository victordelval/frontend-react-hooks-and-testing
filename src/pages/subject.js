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
  const { subjects, getSupportProffessors, getProfessorArea } = useData()
  const [subject, setSubject] = useState(null)
  const [area, setArea] = useState(null)
  const [supportProfessors, setSupportProfessors] = useState([])

  useEffect(() => {
    if (subject) {
      prepareData(subject.professor)
    }
  }, [subject])

  const handleChange = e => {
    setSubject(e.target.value)
  }

  const prepareData = professorId => {
    setArea(getProfessorArea(professorId))
    setSupportProfessors(getSupportProffessors(professorId))
  }

  return (
    <>
      <Typography variant="h6" align="center" color="textSecondary" component="p" className={classes.lighter}>
        Select a subject to see the availability of support professors
      </Typography>
      <br />
      <Container maxWidth="md" component="main">
        <Selector data={subjects} selected={subject} handleChange={handleChange} />
        <br />
        <br />
        {subject && (
          <Paper className={classes.detail}>
            <Typography variant="h5" component="h3" className={classes.lighter}>
              {subject.name}
              <span className={classes.floatRight}>
                <Chip label={area} variant="outlined" />
              </span>
            </Typography>
            <br />
            {supportProfessors.map(professor => (
              <Typography key={professor.name} variant="body1" className={classes.lighter}>
                {professor.name}
              </Typography>
            ))}
            {/* <Timetable schedules={subject.schedules} /> */}
          </Paper>
        )}
      </Container>
    </>
  )
}

export default Professor