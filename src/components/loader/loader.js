import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import lime from "@material-ui/core/colors/lime";

import { AppConfig } from "../../utils/config";

const useStyles = makeStyles(theme => ({
  progress: {
    marginRight: theme.spacing(4),
  },
  text: {
    fontWeight: "lighter",
    color: lime[600]
  }
}));

function Loader({ type }) {
  const classes = useStyles();

  const renderLoader = type => {
    switch (type) {
      case "header":
        return (
          <CircularProgress 
            className={classes.progress}
            size={15}
            // color="primary"
            thickness={5}
          />
        );
      case "message":
        return (
          <Typography
            variant="h5"
            component="div"
            align="center"
            className={classes.text}
          >
            {AppConfig.loader.text}
          </Typography>
        );
      default:
        return (
          <div align="center">
            <br />
            <CircularProgress
              className={classes.progress}
              size={60}
              // color="primary"
            />
          </div>
        );
    }
  };

  return renderLoader(type);
}

export default Loader;
