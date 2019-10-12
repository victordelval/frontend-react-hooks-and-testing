import React, { useState } from 'react'
import Selector from '../components/selector'
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';

import { useData } from '../utils/dataHook'
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
  const { professors } = useData()
  const [selected, setSelected] = useState(null)

  const handleChange = e => {
    setSelected(e.target.value)
  }

  return (
    <>
      <Typography variant="h5" align="center" color="textSecondary" component="p" className={classes.lighter}>
        Select the professor of the subject to see its availability
      </Typography>
      <br />
      <Container maxWidth="md" component="main">
        <Selector data={professors} selected={selected} handleChange={handleChange} />
        <br />
        {selected && (
          <Paper className={classes.detail}>
            <Typography variant="h5" component="h3" className={classes.lighter}>
              {selected.name}
              <span className={classes.floatRight}>
                <Chip label={<strong>{selected.office}</strong>} />
                {' '}
                <Chip label={<strong>{selected.area}</strong>} />
              </span>
            </Typography>
            <br />
            <Timetable schedules={selected.schedules} />
          </Paper>
        )}
      </Container>
    </>
  )
}

export default Professor