import React, { Component } from "react";

// Importing CSS
import "./MenuNav.css";

// Import Image
import logo from "./img/logo.png";

// Import router
import { BrowserRouter as Router, Link } from "react-router-dom";

// importing icons
import { MdContentCopy } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { AiOutlineUser, AiFillSetting } from "react-icons/ai";
import { RiFileChartLine } from "react-icons/ri";

/* Leaving as stateless or function component
  Initially this code is just UI component.
  Further it can be changed
*/
class MenuNav extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  render() {
    return (
      <div className="menu-nav">
        <Router>
          {this.state.show ? <h1>sh</h1> : null}
          <button
            onClick={() => {
              this.setState({ show: !this.state.show });
            }}
          >
            Click Me
          </button>
          <div className="menu-nav-logo">
            <Link to="#">
              <img className="menu-nav-logo-img" src={logo} alt="user" />
            </Link>
          </div>
          <ul className="menu-nav-icons">
            <li>
              <Link to="#" title="Copy">
                <MdContentCopy size={24} />
              </Link>
            </li>
            <li>
              <Link to="#" title="Messages">
                <FiMessageSquare size={24} />
              </Link>
            </li>
            <li>
              <Link to="#" title="Group">
                <AiOutlineUser size={24} />
              </Link>
            </li>
            <li>
              <Link to="#" title="Chart">
                <RiFileChartLine size={24} />
              </Link>
            </li>
            <li>
              <Link to="#" title="Setting">
                <AiFillSetting size={24} />
              </Link>
            </li>
          </ul>
          <div className="user-image">
            <Link to="#">
              <img
                className="user-img-lg"
                src="https://picsum.photos/40/40"
                alt="user"
              />
            </Link>
          </div>
        </Router>
      </div>
    );
  }
}

export default MenuNav;
