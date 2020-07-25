import React, { Component } from "react";

// Importing CSS
import "./SideNav.css";

// Importing Icons
import { RiArrowDropDownLine, RiSlideshow4Line } from "react-icons/ri";
import { IoMdFolderOpen } from "react-icons/io";
import { AiOutlineFileText, AiOutlinePlus } from "react-icons/ai";
import { BsFileSpreadsheet } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";

/* Leaving as stateful or class components
  Initially this code is just UI component.
  Further it can be changed
*/
class SideNav extends Component {
  render() {
    return (
      <div className="side-nav">
        <div className="drive-team clearfix">
          <h4 className="float-left">Marketing Team</h4>
          <div className="float-right">
            <RiArrowDropDownLine />
          </div>
        </div>
        <p>17 Members</p>
        <h3>Storage</h3>
        <ul>
          <li>My Files</li>
          <li>Shared with me</li>
          <li>Recent</li>
          <li>Starred</li>
          <li>Trash</li>
        </ul>
        {/* for create new items */}
        <ul>
          <li>
            <IoMdFolderOpen /> Folder
          </li>
          <li>
            <AiOutlineFileText /> Text Doc
          </li>
          <li>
            <RiSlideshow4Line /> Presentation
          </li>
          <li>
            <BsFileSpreadsheet /> Slides
          </li>
          <li>
            <FiMoreHorizontal /> More
          </li>
        </ul>
        <div className="clearfix">
          <div className="sidenav-button-text float-left">Create new</div>
          <div className="sidenav-button-icon float-right">
            <AiOutlinePlus />
          </div>
        </div>
      </div>
    );
  }
}

export default SideNav;
