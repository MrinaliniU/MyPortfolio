import React, { Component } from "react";
import { Link } from "gatsby";
import logo from "../../images/icon.png";
import { FaGithubAlt, FaFilePdf } from "react-icons/fa";

export default class Navbar extends Component {
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
    this.state.navBarOpen
      ? this.setState({ navBarOpen: false, css: "collapse navbar-collapse" })
      : this.setState({
          navBarOpen: true,
          css: "collapse navbar-collapse show"
        });
  };
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" width="50" height="50" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navBarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  <Link to={link.path} className="nav-link text-capitalize">
                    {link.text}
                  </Link>
                </li>
              );
            })}
            <li className="nav-item ml-sm-5">
              <FaGithubAlt className="git-icon" size={35} />
            </li>
            <li className="nav-item ml-sm-3">
              <FaFilePdf size={30} />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
