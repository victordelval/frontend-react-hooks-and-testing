import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/layout'
import Home from './pages/home'
import Professor from './pages/professor'
import Subject from './pages/subject'
import NotFound from './pages/404'

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/schedules-by-professor" component={Professor} />
        <Route path="/schedules-by-subject" component={Subject} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
