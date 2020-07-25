import React, { Component } from "react";

// Importing CSS
import "./MenuNav.css";

// importing icons
import { FaHorseHead } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { AiOutlineUser, AiFillSetting } from "react-icons/ai";
import { RiFileChartLine } from "react-icons/ri";

/* Leaving as stateful or class components
  Initially this code is just UI component.
  Further it can be changed
*/
class MenuNav extends Component {
  render() {
    return (
      <div className="menu-nav">
        <FaHorseHead />
        <ul>
          <li>
            <MdContentCopy />
          </li>
          <li>
            <FiMessageSquare />
          </li>
          <li>
            <AiOutlineUser />
          </li>
          <li>
            <RiFileChartLine />
          </li>
          <li>
            <AiFillSetting />
          </li>
        </ul>
        <div>
          <img
            className="user-img-lg"
            src="https://picsum.photos/40/40"
            alt="user"
          />
        </div>
      </div>
    );
  }
}

export default MenuNav;
