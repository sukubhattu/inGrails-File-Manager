import React, { Component } from "react";

// Import CSS
import "./MainContainer.css";

// Import router
import { BrowserRouter as Router, Link } from "react-router-dom";

// import Image
import googleDrive from "./img/google-drive.png";
import oneDrive from "./img/onedrive.png";
import dropBox from "./img/dropbox.png";
import pdfIcon from "./img/pdf.png";
import zipIcon from "./img/zip-format.png";
import docIcon from "./img/doc.png";

// Import icons
import { MdMoreHoriz } from "react-icons/md";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FaFolder } from "react-icons/fa";

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
      <div className="shared-folder-card second-card">
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
          <div className="card">
            <div className="cloud-storage-card">
              <div className="cloud-storage-name clearfix">
                <div className="float-left">
                  <img src={googleDrive} alt="Google Drive" />
                  <br />
                  <h4> Google Drive</h4>
                </div>
                <div className="float-right">
                  <i className="cloud-storage-name-value">
                    <MdMoreHoriz size={24} />
                  </i>
                </div>
              </div>
              <div className="cloud-storage-amount clearfix">
                <p className="float-left">45 GB</p>
                <p className="float-right">50 GB</p>
              </div>
              <div className="storage-progress-bar-individual">
                <div className="storage-progress-bar-individual1"></div>
              </div>
            </div>
            {/* second-card */}
            <div className="cloud-storage-card second-card">
              <div className="cloud-storage-name clearfix">
                <div className="float-left">
                  <img src={dropBox} alt="Drop Box" />
                  <br />
                  <h4>Dropbox</h4>
                </div>
                <div className="float-right">
                  <i className="cloud-storage-name-value">
                    <MdMoreHoriz size={24} />
                  </i>
                </div>
              </div>
              <div className="cloud-storage-amount clearfix">
                <p className="float-left">45 GB</p>
                <p className="float-right">50 GB</p>
              </div>
              <div className="storage-progress-bar-individual">
                <div className="storage-progress-bar-individual1"></div>
              </div>
            </div>
            <div className="cloud-storage-card">
              <div className="cloud-storage-name clearfix">
                <div className="float-left">
                  <img src={oneDrive} alt="One Drive" />
                  <br />
                  <h4>One Drive</h4>
                </div>
                <div className="float-right">
                  <i className="cloud-storage-name-value">
                    <MdMoreHoriz size={24} />
                  </i>
                </div>
              </div>
              <div className="cloud-storage-amount clearfix">
                <p className="float-left">45 GB</p>
                <p className="float-right">50 GB</p>
              </div>
              <div className="storage-progress-bar-individual">
                <div className="storage-progress-bar-individual1"></div>
              </div>
            </div>
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
                {this.state.showingFolder ? "Hide All" : "View All"}
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
                <tbody>
                  <tr>
                    <td>
                      <img
                        className="file-icon"
                        src={zipIcon}
                        alt="file icon"
                      />
                      React Media Files.zip
                    </td>
                    <td>Only you</td>
                    <td>30 sept, 2019</td>
                    <td>
                      <MdMoreHoriz />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        className="file-icon"
                        src={docIcon}
                        alt="file icon"
                      />
                      React Media Files.zip
                    </td>
                    <td>Only you</td>
                    <td>30 sept, 2019</td>
                    <td>
                      <MdMoreHoriz />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        className="file-icon"
                        src={pdfIcon}
                        alt="file icon"
                      />
                      React Media Files.zip
                    </td>
                    <td>Only you</td>
                    <td>30 sept, 2019</td>
                    <td>
                      <MdMoreHoriz />
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* Recent Files ends here */}
            </div>
          ) : (
            folderTemplate
          )}
          {/* Live twitter feed */}
          <div className="twitter-feed">
            <a
              className="twitter-timeline"
              data-height="600px"
              href="https://twitter.com/realpython"
            >
              Tweets by RealPython
            </a>{" "}
          </div>

          {/* Live twitter feed ends here */}
        </Router>
      </div>
    );
  }
}

export default MainContainer;
