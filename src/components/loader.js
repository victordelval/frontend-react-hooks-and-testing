import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  progress: {
    marginRight: theme.spacing(4),
  },
}));

function Loader() {
  const classes = useStyles();
  return (
    // <div align="center">
      <CircularProgress className={classes.progress} size={15} color="primary" thickness={5} />
    // </div>
  );
}

export default Loader