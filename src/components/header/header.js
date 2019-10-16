import React from "react";
import { Link as NavLink, useLocation } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PeopleAlt from "@material-ui/icons/PeopleAlt";
import grey from "@material-ui/core/colors/grey";
import lime from "@material-ui/core/colors/lime";

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
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: grey[900]
    // color: "initial"
  },
  active: {
    margin: theme.spacing(1, 1.5),
    color: 'white',
    backgroundColor: lime[600],
    '&:hover': {
      backgroundColor: lime[600],
    },
  },
  icon: {
    marginRight: 10,
    color: grey[900]
  }
}));

function Header() {
  const classes = useStyles();
  const { loading } = useData() || false;
  const pathname = useLocation().pathname;

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <PeopleAlt className={classes.icon} /> 
        <Typography
          variant="h5"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          <NavLink to="/" className={classes.link}>
            {AppConfig.appName}
          </NavLink>
        </Typography>
        <nav>
          {loading && <Loader type={"header"} />}
          <NavLink to={AppConfig.routes.subjectProfessor}>
            <Button color="primary" className={pathname === AppConfig.routes.subjectProfessor ? classes.active : classes.link}>
              {AppConfig.header.linkToSubjectProfessor}
            </Button>
          </NavLink>
          <NavLink to={AppConfig.routes.otherProfessors}>
            <Button color="primary" className={pathname === AppConfig.routes.otherProfessors ? classes.active : classes.link}>
              {AppConfig.header.linkToOtherProfessors}            
            </Button>
          </NavLink>
          <NavLink to={AppConfig.routes.availableToday}>
            <Button color="primary" className={pathname === AppConfig.routes.availableToday ? classes.active : classes.link}>
              {AppConfig.header.linkToAvailableToday}            
            </Button>
          </NavLink>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
