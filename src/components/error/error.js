import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ErrorIcon from "@material-ui/icons/ErrorOutline";
import red from '@material-ui/core/colors/red';

const useStyles = makeStyles(theme => ({
  error: {
    color: red[600],
    background: red[100],
    padding: 15
  }
}));

function Error({ msg }) {
  const classes = useStyles();
  console.log(msg)
  return (
    <Container maxWidth="sm">
      <Typography
        variant="h5"
        component="div"
        align="center"
        className={classes.error}
      >
        <ErrorIcon fontSize="large" className={classes.icon} />
        <br />
        {msg && msg.message} 
      </Typography>
    </Container>
  );
}

export default Error;
