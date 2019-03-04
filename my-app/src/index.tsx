import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { applyMiddleware, compose, Middleware, Store, Reducer, createStore as reduxCreateStore } from 'redux';
import thunkMiddleware from "redux-thunk";
import { rootReducer } from './reducers/index';
import { IGlobalState } from './types/index';

import { Provider } from 'react-redux';

import PrivateRoute from './components/PrivateRoute';

import Login from './containers/Login';
import ReduxHello from './containers/ReduxHello';

function createStore(rootReducer: Reducer): Store<IGlobalState> {
  const middlewares: Array<Middleware> = [
    thunkMiddleware
  ];

  const enhancer: any = compose(applyMiddleware(...middlewares));

  return reduxCreateStore(rootReducer, undefined, enhancer);
}

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
        <PrivateRoute path="/" component={ReduxHello} />
        <Route exact path="/login" component={Login} />      
      </div>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
