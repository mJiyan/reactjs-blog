import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore, { history } from './configureStore';
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

export const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        {routes.map((prop) => (
          <Route exact path={prop.path} component={prop.component} key={prop.path} />
        ))}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
