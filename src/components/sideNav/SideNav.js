import React, { Component } from "react";

// Importing CSS
import "./SideNav.css";

// Importing Icons
import { RiArrowDropDownLine, RiSlideshow4Line } from "react-icons/ri";
import { IoMdFolderOpen } from "react-icons/io";
import {
  AiOutlineFileText,
  AiOutlinePlus,
  AiOutlineRight,
  AiFillCaretRight,
  AiFillFolder,
} from "react-icons/ai";
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
        <div className="drive-team">
          <div className="clearfix">
            <div className="drive-team-name float-left">
              <h4>Marketing Team</h4>
              <p>17 Members</p>
            </div>
            <div className="drive-team-down-icon float-right">
              <RiArrowDropDownLine size={30} />
            </div>
          </div>
        </div>

        <h2>Storage</h2>
        <ul className="file-types">
          <li>
            <h4>My Files</h4>
            <ul className="file-types-sub">
              <li>
                <i className="file-types-sub1">
                  <AiFillCaretRight />
                </i>
                <i className="file-types-sub2">
                  <AiFillFolder />
                </i>
                Analytics
              </li>
              <li>
                <i className="file-types-sub1">
                  <AiFillCaretRight />
                </i>
                <i className="file-types-sub2">
                  <AiFillFolder />
                </i>
                Assets
              </li>
              <li>
                <i className="file-types-sub1">
                  <AiFillCaretRight />
                </i>
                <i className="file-types-sub2">
                  <AiFillFolder />
                </i>
                Marketing
              </li>
              <li>
                <i className="file-types-sub1">
                  <AiFillCaretRight />
                </i>
                <i className="file-types-sub2">
                  <AiFillFolder />
                </i>
                Templates
              </li>
              <li>
                <i className="file-types-sub1">
                  <AiFillCaretRight />
                </i>
                <i className="file-types-sub2">
                  <AiFillFolder />
                </i>
                Projects
              </li>
            </ul>
          </li>
          <li>Shared with me</li>
          <li>Recent</li>
          <li>Starred</li>
          <li>Trash</li>
        </ul>
        {/* for create new items */}
        <ul className="create-new">
          <li>
            <i className="create-new-item">
              <IoMdFolderOpen size={20} />
            </i>
            Folder
          </li>
          <li>
            <i className="create-new-item">
              <AiOutlineFileText size={20} />
            </i>
            Text Doc
            <i className="create-new-item-go">
              <AiOutlineRight size={14} />
            </i>
          </li>
          <li>
            <i className="create-new-item">
              <RiSlideshow4Line size={20} />
            </i>
            Presentation
            <i className="create-new-item-go">
              <AiOutlineRight size={14} />
            </i>
          </li>
          <li>
            <i className="create-new-item">
              <BsFileSpreadsheet size={20} />
            </i>
            Slides
            <i className="create-new-item-go">
              <AiOutlineRight size={14} />
            </i>
          </li>
          <li>
            <i className="create-new-item">
              <FiMoreHorizontal size={20} />
            </i>
            More
            <i className="create-new-item-go">
              <AiOutlineRight size={14} />
            </i>
          </li>
        </ul>
        <div className="create-new-button">
          Create new
          <i className="create-new-button-plus">
            <AiOutlinePlus />
          </i>
        </div>
      </div>
    );
  }
}

export default SideNav;
