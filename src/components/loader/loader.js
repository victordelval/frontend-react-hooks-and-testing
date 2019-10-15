import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  progress: {
    marginRight: theme.spacing(4),
  },
}));

function Loader({ type }) {
  const classes = useStyles();

  const renderLoader = type => {
    switch(type) {
      case 'header':
        return (
          <CircularProgress className={classes.progress} size={15} color="primary" thickness={5} />
        )
      case 'message':
        return (
          <Typography variant="h5" component="div" align="center" className={classes.lighter}>
            Loading...
          </Typography>
        )
      default:
        return (
          <div align="center">
            <br />
            <CircularProgress className={classes.progress} size={60} color="primary" />
          </div>          
        )
    }
  }

  return renderLoader(type)
}

export default Loader