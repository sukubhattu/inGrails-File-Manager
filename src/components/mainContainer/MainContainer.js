import React, { Component } from "react";

// Import CSS
import "./MainContainer.css";

// Import router
import { BrowserRouter as Router, Link } from "react-router-dom";

// Import icons
import { MdMoreHoriz } from "react-icons/md";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FaFolder } from "react-icons/fa";

// Import dummy data variables
import files from "./user-files";
import cloudFiles from "./cloud-files";

/* Making this component as class or stateful component for view all button demo purpose */
class MainContainer extends Component {
  state = {
    showingFolder: false,
  };

  toggleShowFolder = () => {
    this.setState({
      showingFolder: !this.state.showingFolder,
    });
  };

  render() {
    return (
      <div className="main-container">
        <Router>
          {/* Search bar starts here */}
          <div className="main-container-search">
            <form action="#" className="main-container-search-form">
              <input
                type="text"
                className="form-input search-input"
                placeholder="Search the file"
              />
            </form>
          </div>
          {/* search bar ends here */}

          {/* cloud storage card starts here */}

          {/* 
            DYNAMIC card without hard coding for cloud storage
           */}
          <div className="card">
            {cloudFiles.map((file, index) => (
              <div className="cloud-storage-card" key={index}>
                <div className="cloud-storage-name clearfix">
                  <div className="float-left">
                    <img src={file.icon} alt="Google Drive" />
                    <br />
                    <h4> {file.name}</h4>
                  </div>
                  <div className="float-right">
                    <i className="cloud-storage-name-value">
                      <MdMoreHoriz size={24} />
                    </i>
                  </div>
                </div>
                <div className="cloud-storage-amount clearfix">
                  <p className="float-left">{file.used}</p>
                  <p className="float-right">{file.total}</p>
                </div>
                <div className="storage-progress-bar-individual">
                  <div
                    className="storage-progress-bar-individual1"
                    style={{ width: file.percentage + "%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          {/* cloud storage card ends here */}

          {/* Folder Starts Here */}
          <div className="main-container-header clearfix">
            <div className="main-container-header-name float-left">
              <h2>Folders</h2>
            </div>
            <div className="main-container-header-view float-right">
              <Link
                to="#"
                className="folder-view-all"
                onClick={this.toggleShowFolder}
              >
                {this.state.showingFolder ? "Hide" : "View All"}
              </Link>
            </div>
          </div>
          {folderTemplate}
          {/* Folder ends here */}

          {/* Recent Files start here */}
          {!this.state.showingFolder ? (
            <div>
              <div className="main-container-header clearfix">
                <div className="main-container-header-name float-left">
                  <h2>Recent Files</h2>
                </div>
                <div className="main-container-header-view float-right">
                  <Link to="#" className="folder-view-all">
                    View All
                  </Link>
                </div>
              </div>
              <table className="recent-files-table">
                <thead>
                  <tr>
                    <th>
                      Name <AiOutlineArrowUp size={14} />
                    </th>
                    <th>Members</th>
                    <th>Last Modified</th>
                    <th></th>
                  </tr>
                </thead>
                {/* Using user-files data to show repeated items */}
                <tbody>
                  {files.map((file, index) => (
                    <tr key={index}>
                      <td>
                        {" "}
                        <img
                          className="file-icon"
                          src={file.icon}
                          alt="file icon"
                        />{" "}
                        {file.name}
                      </td>
                      <td>{file.sharedWith}</td>
                      <td>{file.date}</td>
                      <td className="file-more">
                        <MdMoreHoriz />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Recent Files ends here */}
            </div>
          ) : (
            folderTemplate
          )}
        </Router>
      </div>
    );
  }
}

/* 
  This folderTemplate is for show all and hide option.
  This card is hard coded.
  DYNAMIC version of same card is done in cloud storage card section.
*/
const folderTemplate = (
  <div>
    <div className="card">
      <div className="shared-folder-card">
        <div className="random-name clearfix">
          <div className="float-left">
            <i className="shared-folder-card-info-name">
              <FaFolder size={32} />
            </i>
            <h4>Analytics</h4>
            <p>15 Files</p>
          </div>
          <div className="float-right">
            <div className="shared-people-1">
              <img
                className="shared-people-img1"
                src="https://picsum.photos/20/20"
                alt="shared user"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="shared-folder-card">
        <div className=" clearfix">
          <div className="float-left">
            <i className="shared-folder-card-info-name">
              <FaFolder size={32} />
            </i>
            <h4>Assets</h4>
            <p>345 Files</p>
          </div>
          <div className="float-right">
            <div className="shared-people-1">
              <img
                className="shared-people-img1"
                src="https://picsum.photos/20/20"
                alt="shared user"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="shared-folder-card">
        <div className=" clearfix">
          <div className="float-left">
            <i className="shared-folder-card-info-name">
              <FaFolder size={32} />
            </i>
            <h4>Marketing</h4>
            <p>143 Files</p>
          </div>
          <div className="float-right">
            <div className="shared-people-1">
              <img
                className="shared-people-img1"
                src="https://picsum.photos/20/20"
                alt="shared user"
              />
            </div>
            <div className="shared-people-2">
              <img
                className="shared-people-img2"
                src="https://picsum.photos/20/20"
                alt="shared user"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default MainContainer;
