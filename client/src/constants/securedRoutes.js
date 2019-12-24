import React from "react";
import { Route, Redirect } from "react-router-dom";
import { checkUser } from "../util/utils";

function PrivateRoute({ component: Component, ...rest }) {
  // User id will check if user is authorise then only then it will redirect to Home page other wise in login page.
  return (
    <>
      <Route
        {...rest}
        render={props =>
          checkUser() ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          )
        }
      />
    </>
  );
}

export default PrivateRoute;