import React, { useState } from 'react'

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';

import { useData } from '../data/data'
import Selector from '../components/selector/selector'
import Timetable from '../components/timetable/timetable'
import Loader from '../components/loader/loader'

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
  const { professors, loading } = useData() || false
  const [selected, setSelected] = useState(null)

  const handleChange = e => {
    setSelected(e.target.value)
  }

  return (
    <>
      <Typography variant="h6" align="center" color="textSecondary" component="p" className={classes.lighter}>
        Select the professor of the subject to see its availability
      </Typography>
      <br />
      <Container maxWidth="md" component="main">
        <Selector data={professors} selected={selected} handleChange={handleChange} />
        <br />
        <br />
        {loading && (
            <Loader type={'message'} />
        )}
        {selected && (
          <Paper className={classes.detail}>
            <Typography variant="h5" component="h3" className={classes.lighter}>
              {selected.name}
              <span className={classes.floatRight}>
                <Chip label={selected.office} variant="outlined" />
                {' '}
                <Chip label={selected.area} variant="outlined" />
              </span>
            </Typography>
            <br />
            {/* TODO - Show professor main and support subjects */}
            <Timetable schedules={selected.schedules} />
          </Paper>
        )}
      </Container>
    </>
  )
}

export default Professor