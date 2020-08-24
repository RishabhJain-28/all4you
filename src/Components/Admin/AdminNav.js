import React from "react";
import { Nav } from "react-bootstrap";

const AdminNav = ({ location }) => {
  const abc = () => {
    const { pathname } = location;
    const split = pathname.split("/");
    let l = split.length - 1;
    if (split[l] === "") l--;
    console.log(split[l]);
    return split[l];
  };
  return (
    <>
      <Nav
        style={{ border: "0" }}
        navbar={true}
        variant="tabs"
        defaultActiveKey={() => abc()}
      >
        <Nav.Item
          style={{
            margin: "0 2px",
            backgroundColor: "#2a3239",
          }}
        >
          <Nav.Link
            href="/admin"
            style={{ color: "#636e77", borderRadius: "0px" }}
            eventKey="admin"
          >
            <i className="fa fa-home"></i> DASHBOARD
          </Nav.Link>
        </Nav.Item>
        <Nav.Item
          style={{
            margin: "0 2px",
            backgroundColor: "#2a3239",
          }}
        >
          <Nav.Link
            style={{ color: "#636e77", borderRadius: "0px" }}
            eventKey="user"
          >
            <i className="fa fa-users"></i> USERS
          </Nav.Link>
        </Nav.Item>
        <Nav.Item
          style={{
            margin: "0 2px",
            backgroundColor: "#2a3239",
          }}
        >
          <Nav.Link
            href="/admin/merchant"
            style={{ color: "#636e77", borderRadius: "0px" }}
            eventKey="merchant"
          >
            Merchant
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default AdminNav;
