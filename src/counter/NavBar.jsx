import React from "react";

const NavBar = (props) => {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid nadge bg-warning">
            <span className="navbar-brand mx-auto">
              Active Counter: {props.accounter}
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
