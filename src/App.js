import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./components/layout/layout";
import Home from "./pages/home/home";
import Professor from "./pages/professor/professor";
import OtherProfessors from "./pages/otherProfessors/otherProfessors";
import AvailableToday from "./pages/availableToday/availableToday";
import NotFound from "./pages/notFound/notFound";

import { AppConfig } from "./utils/config";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={AppConfig.routes.subjectProfessor} component={Professor} />
        <Route path={AppConfig.routes.otherProfessors} component={OtherProfessors} />
        <Route path={AppConfig.routes.availableToday} component={AvailableToday} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
