import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import AdminNav from "./AdminNav";
import Dashboard from "./Dashboard";
import CreateMerchant from "./Merchant/CreateMerchant";

// import '../../components-md.min.css'
import { Nav } from "react-bootstrap";
const Admin = ({ location }) => {
  return (
    <>
      <div
        className="container-fluid"
        style={{ background: "#2f373e", minHeight: "800px" }}
      >
        <div className="row">
          <h1>Button and admin menu</h1>
        </div>
        <div className="row-fluid">
          <AdminNav location={location} />
          <div
            className="container-fluid"
            style={{
              backgroundColor: "white",
              padding: " 20px 30px",
              minHeight: "650px",
              marginLeft: "2px",
            }}
          >
            <Switch>
              <Route exact path="/admin" component={Dashboard} />
              <Route exact path="/admin/merchant" component={CreateMerchant} />
            </Switch>
          </div>
          <div style={{ color: "#bbb", fontSize: "14px" }}>
            <p>
              © Copyright 2020 <Link to="/"> All For You</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
