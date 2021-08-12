import React from "react";
import { Redirect, Route } from "react-router-dom";

const PublicRoutes = ({ component: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuth ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

export default PublicRoutes;
