import React, { Component } from "react";

class Nav extends Component {
  state = {
    open: false
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          React Reading List
      </a>
      </nav>
    );
  }
}

export default Nav;
