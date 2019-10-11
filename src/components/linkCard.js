import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles(theme => ({
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  }
}));

function LinkCard({ to, title, body }) {
  const classes = useStyles();
  return (
    <Link to={to}>
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
    </Link>
  );
}

export default LinkCard;
