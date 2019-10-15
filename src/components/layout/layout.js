import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { useData } from "../../data/data";
import Header from "../header/header";
import Footer from "../footer/footer";
import Error from '../error/error'

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  main: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    maxWidth: "900px"
  }
}));

function Layout({ children }) {
  const classes = useStyles();
  const { error } = useData() || false;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Container component="main" className={classes.main} maxWidth="sm">
        {error ? <Error msg={error} /> : children}
      </Container>
      <Footer />
    </div>
  );
}

export default Layout;
