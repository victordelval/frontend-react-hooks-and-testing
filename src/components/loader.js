import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
}));

function Loader() {
  const classes = useStyles();
  return (
    <div align="center">
      <CircularProgress className={classes.progress} size={60} color="primary" />
    </div>
  );
}

export default Loader