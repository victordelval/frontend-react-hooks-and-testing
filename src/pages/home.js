import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import LinkCard from '../components/linkCard'

function Home() {
  return (
    <>
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        Welcome to <strong>Tutoriza2</strong>!
      </Typography>
      <br />
      <br />
      <br />
      <Typography variant="h5" align="center" color="textSecondary" component="p">
        You can search for tutorship schedules in 2 ways
      </Typography>
      <br />
      <br />
      <br />
      <br />
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          <Grid item key={"Search by professor"} xs={12} sm={6} md={6}>
            <LinkCard 
              to="/schedules-by-professor"
              title={"By Professor"}
              body={'Mauris vitae tempor mauris, fringilla lacinia nisl. Donec sed purus ut mi dapibus fringilla sit amet in dolor.'}
            />
            {/* <Link to="/schedules-by-professor">
              <Card>
                <CardHeader
                  title={"By Professor"}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <ul>
                    <Typography component="li" variant="subtitle1" align="center">
                      Mauris vitae tempor mauris, fringilla lacinia nisl. Donec
                      sed purus ut mi dapibus fringilla sit amet in dolor.
                    </Typography>
                  </ul>
                </CardContent>
              </Card>
            </Link> */}
          </Grid>
          <Grid item key={"Search by subject"} xs={12} sm={6} md={6}>
            <LinkCard 
              to="/schedules-by-subject"
              title={"By Subject"}
              body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae tempor mauris, fringilla lacinia nisl.'}
            />
            {/* <Link to="/schedules-by-subject">
              <Card>
                <CardHeader
                  title={"By Subject"}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <ul>
                    <Typography component="li" variant="subtitle1" align="center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris vitae tempor mauris, fringilla lacinia nisl.
                    </Typography>
                  </ul>
                </CardContent>
              </Card>
            </Link> */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;
