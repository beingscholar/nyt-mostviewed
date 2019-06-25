import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import history from '../history';

import NewsList from './news/NewsList';
import NewsDetail from './news/NewsDetail';

const App = () => {
  return (
    // <div className="ui container">
    //   <NewsList />
    // </div>
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={NewsList} />
            <Route path="/news/:url" exact component={NewsDetail} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
