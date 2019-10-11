import React from 'react'
import { Link as NavLink } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" color="inherit" noWrap className={classes.toolbarTitle}>
          <NavLink to="/">
              Tutoriza2
          </NavLink>
        </Typography>
        <nav>
          <NavLink to="/schedules-by-professor">
            <Button color="primary" className={classes.link}>
              By Professor
            </Button>
          </NavLink>
          <NavLink to="/schedules-by-subject">
            <Button color="primary" className={classes.link}>
              By Subject
            </Button>
          </NavLink>
        </nav>
      </Toolbar>
    </AppBar>
  )
}

export default Header