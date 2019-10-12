import React, { useState, useEffect } from 'react'
import Selector from '../components/selector'
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';

import { useData } from '../utils/dataHook'

const useStyles = makeStyles(theme => ({
  detail: {
    padding: theme.spacing(3, 2),
  },
}));

function Professor() {
  const classes = useStyles();
  const { professors } = useData()
  const [selected, setSelected] = useState(null)

  const handleChange = e => {
    console.log("*** change", e)
    setSelected(e.target.value)
  }

  return (
    <>
      <Typography variant="h5" align="center" color="textSecondary" component="p">
        Select the professor of the subject you want the tutorship
      </Typography>
      <br />
      <br />
      <Container maxWidth="md" component="main">
        <Selector data={professors} selected={selected} handleChange={handleChange} />
        {/* <hr /> */}
        <br />
        <br />
        {selected && (
          <Paper className={classes.detail}>
            <Typography variant="h5" component="h3">
              {selected.name}
            </Typography>
            <Typography component="p">
              {selected.area}
            </Typography>
            <Typography component="p">
              {selected.office}
            </Typography>
            <Typography component="p">
              {JSON.stringify(selected.schedules)}
            </Typography>
          </Paper>
        )}
      </Container>
    </>
  )
}

export default Professor