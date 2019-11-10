import React, { Component } from "react";
import { Link } from "gatsby";
import logo from "../../images/icon.png";
import { FaGithubAlt } from "react-icons/fa";

export default class nav extends Component {
  state = {
    navBarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "home"
      },
      {
        id: 2,
        path: "/about",
        text: "about"
      }
    ]
  };
  navBarHandler = () => {
    console.log("Hello");
  };
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" width="50" height="50" />
        </Link>
      </nav>
    );
  }
}
