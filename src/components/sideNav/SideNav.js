import React, { Component } from "react";

// Importing CSS
import "./SideNav.css";

// Importing Icons
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdFolderOpen } from "react-icons/io";
import { AiOutlineRight, AiFillCaretRight, AiFillFolder } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";

// Import accordion
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Import dummy data
import storageData from "./sidenav-data";
import createNewData from "./sidenav-create-data";

/* Leaving as stateful or class components
  Initially this code is just UI component.
  Further it can be changed
*/
class SideNav extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
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
        {/* 
        allowZeroExpanded: On opening another accordion previous will get closed 
        preExpanded: 1st one is expanded by default
         */}
        <Accordion allowZeroExpanded preExpanded={["a"]}>
          {storageData.map((file, index) => (
            <ul className="file-types" key={index}>
              <AccordionItem uuid={file.uuid}>
                <AccordionItemButton>
                  <li className="file-types-head">{file.name}</li>
                </AccordionItemButton>
                <AccordionItemPanel>
                  <ul className="file-types-sub">
                    {file.subFolders.map((folder, index) => (
                      <li key={index}>
                        <i className="file-types-sub1">
                          <AiFillCaretRight />
                        </i>
                        <i className="file-types-sub2">
                          <AiFillFolder />
                        </i>
                        {folder}
                      </li>
                    ))}
                  </ul>
                </AccordionItemPanel>
              </AccordionItem>
            </ul>
          ))}
        </Accordion>

        {/* for create new items */}

        {this.state.show ? (
          <ul className="create-new">
            <li>
              <i className="create-new-item">
                <IoMdFolderOpen size={20} />
              </i>
              Folder
            </li>
            {createNewData.map((file, index) => (
              <li key={index}>
                <i className="create-new-item">
                  <file.icon size={20} />
                </i>
                {file.name}
                <i className="create-new-item-go">
                  <AiOutlineRight size={14} />
                </i>
              </li>
            ))}
          </ul>
        ) : (
          <div style={{ height: 266 + "px" }}></div>
        )}
        <div
          className="create-new-button"
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          Create new
          <i className="create-new-button-plus">
            <BsPlus />
          </i>
        </div>
      </div>
    );
  }
}

export default SideNav;
