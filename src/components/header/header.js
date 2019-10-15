import React from "react";
import { Link as NavLink } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { useData } from "../../data/data";
import Loader from "../loader/loader";
import { AppConfig } from "../../utils/config";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    },
    ul: {
      margin: 0,
      padding: 0
    },
    li: {
      listStyle: "none"
    }
  },
  appBar: {
    backgroundColor: "white",
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: "initial"
  }
}));

function Header() {
  const classes = useStyles();
  const { loading } = useData() || false;
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h5"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          <NavLink to="/">{AppConfig.appName}</NavLink>
        </Typography>
        <nav>
          {loading && <Loader type={"header"} />}
          <NavLink to={AppConfig.routes.subjectProfessor}>
            <Button color="primary" className={classes.link}>
              {AppConfig.header.linkToSubjectProfessor}
            </Button>
          </NavLink>
          <NavLink to={AppConfig.routes.otherProfessors}>
            <Button color="primary" className={classes.link}>
              {AppConfig.header.linkToOtherProfessors}            
            </Button>
          </NavLink>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
