import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"
import { FaLinkedin, FaGithubAlt, FaFilePdf } from "react-icons/fa"

export default class Navbar extends Component {
  state = {
    navBarOpen: false,
    css: "navbar-collapse collapse",
    links: [
      {
        id: 1,
        path: "/#about-me",
        text: "About Me",
      },
      {
        id: 2,
        path: "/#job",
        text: "Experience",
      },
      {
        id: 3,
        path: "/#project",
        text: "Projects",
      },
    ],
  }
  navBarHandler = () => {
    this.state.navBarOpen
      ? this.setState({
          navBarOpen: false,
          css: "collapse navbar-collapse",
        })
      : this.setState({
          navBarOpen: true,
          css: "collapse navbar-collapse show",
        })
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light nav-text">
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
              )
            })}
          </ul>
        </div>
      </nav>
    )
  }
}
