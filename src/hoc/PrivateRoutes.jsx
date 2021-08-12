import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoutes = ({ component: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth ? <Component {...props} /> : <Redirect to="/auth/login" />
    }
  />
);

export default PrivateRoutes;
