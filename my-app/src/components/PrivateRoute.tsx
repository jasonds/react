import * as React from 'react';

import { Route, Redirect } from 'react-router-dom';

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb: any) {
      this.isAuthenticated = true
      setTimeout(cb, 100)
    },
    signout(cb: any) {
      this.isAuthenticated = false
      setTimeout(cb, 100)
    }
  }

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      fakeAuth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  );

export default PrivateRoute;
