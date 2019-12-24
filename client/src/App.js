import React from "react";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import { appRoutes } from "./constants/routes";
import Footer from "./components/CommanComponent/Footer";
import PageNotFound from "./components/CommanComponent/PageNotFound";

function App() {
  return (
    <>
      <Router>
        <Switch>
          {appRoutes.map((routeProps, index) => (
            <Route key={index} {...routeProps} />
          ))}
          {/* 
          If Authentication module is there then this need to use.

          {privateRoutes.map((routeProps, index) => {
            return <PrivateRoute key={index} {...routeProps} />;
          })} */}
          <Route component={PageNotFound} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
