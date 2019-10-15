import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import LinkCard from "../../components/linkCard/linkCard";
import { AppConfig } from "../../utils/config";

const useStyles = makeStyles(theme => ({
  lighter: {
    fontWeight: "lighter"
  }
}));

function Home() {
  const classes = useStyles();
  return (
    <>
      <br />
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        className={classes.lighter}
        gutterBottom
      >
        {AppConfig.pages.home.title}
      </Typography>
      <br />
      <br />
      <Typography
        variant="h5"
        align="center"
        color="textSecondary"
        component="p"
        className={classes.lighter}
      >
        {AppConfig.pages.home.subtitle}
      </Typography>
      <br />
      <br />
      <br />
      <br />
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          <Grid item key={"Search by professor"} xs={12} sm={6} md={6}>
            <LinkCard
              to={AppConfig.routes.subjectProfessor}
              title={AppConfig.pages.home.linkToSubjectProfessor.title}
              body={AppConfig.pages.home.linkToSubjectProfessor.body}
            />
          </Grid>
          <Grid item key={"Search by subject"} xs={12} sm={6} md={6}>
            <LinkCard
              to={AppConfig.routes.otherProfessors}
              title={AppConfig.pages.home.linkToOtherProfessors.title}
              body={AppConfig.pages.home.linkToOtherProfessors.body}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;
