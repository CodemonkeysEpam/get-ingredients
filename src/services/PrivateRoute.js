import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({
  component: Component,
  isLogin,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props =>
        isLogin === true ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}