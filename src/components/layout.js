import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { useData } from '../utils/dataHook'
import Header from './header'
import Footer from './footer'
import Loader from './loader'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    maxWidth: '900px',
  },
}));

function Layout({ children }) {
  const classes = useStyles();
  const { loading, error } = useData()
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Container component="main" className={classes.main} maxWidth="sm">
        {loading ? <Loader /> : children}
      </Container>
      <Footer />
    </div>
  )
}

export default Layout