import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./style.css";

import Homepage from "./Components/Homepage";
import VendorPage from "./Components/VendorPage";
import Adminpage from "./Components/Admin/Adminpage";
import DealsPage from "./Components/DealsPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/admin" component={Adminpage} />
        <Route
          path="/"
          render={(props) => (
            <>
              <Header />
              <Switch>
                <Route
                  exact
                  path="/deals/:id"
                  component={DealsPage}
                  {...props}
                />
                <Route exact path="/vendor" component={VendorPage} {...props} />
                <Route exact path="/" component={Homepage} {...props} />
              </Switch>
              <Footer />
            </>
          )}
        />
      </Switch>
    </>
  );
}

export default App;
