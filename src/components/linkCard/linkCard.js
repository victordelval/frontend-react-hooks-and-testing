import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import lime from "@material-ui/core/colors/lime";

const useStyles = makeStyles(theme => ({
  cardHeader: {
    backgroundColor: lime[400]
  }
}));

function LinkCard({ to, title, body }) {
  const classes = useStyles();
  return (
    <Link to={to}>
      <Button>
        <Card>
          <CardHeader
            title={title}
            titleTypographyProps={{ align: "center" }}
            subheaderTypographyProps={{ align: "center" }}
            className={classes.cardHeader}
          />
          <CardContent>
            <ul>
              <Typography component="li" variant="subtitle1" align="center">
                {body}
              </Typography>
            </ul>
          </CardContent>
        </Card>
      </Button>
    </Link>
  );
}

LinkCard.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string
};

export default LinkCard;
