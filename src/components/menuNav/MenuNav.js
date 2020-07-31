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

class MenuNav extends Component {
  /*
  This constructor and handleSwitchOption handles storage toggle switch
  The value is then passed to parent component i.e App.js
  */
  constructor(props) {
    super(props);

    this.state = {
      active: this.props.buttonON,
    };
  }

  handleSwitchOption = (event) => {
    this.props.changeButtonFunction(!this.state.active);
    this.setState({ active: !this.state.active });
  };

  render() {
    return (
      <div className="menu-nav">
        <Router>
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

          {/* On click the boolean value changes from true to false and vice versa */}
          <div className="storage-toggler">
            <label className="switch">
              <input
                type="checkbox"
                checked={this.state.active}
                onChange={this.handleSwitchOption}
              />
              <span className="slider round"></span>
            </label>
          </div>

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
