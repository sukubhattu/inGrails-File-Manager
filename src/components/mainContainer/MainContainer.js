import React, { Component } from "react";

// Import CSS
import "./MainContainer.css";

// import Image
import googleDrive from "./img/google-drive.png";
import oneDrive from "./img/onedrive.png";
import dropBox from "./img/dropbox.png";
import pdfIcon from "./img/pdf.png";
import zipIcon from "./img/zip-format.png";
import docIcon from "./img/google-docs.png";

// Import icons
import { MdMoreHoriz } from "react-icons/md";
import { BsArrowUpShort } from "react-icons/bs";
import { FaFolder } from "react-icons/fa";

/* Leaving as stateful or class components
  Initially this code is just UI component.
  Further it can be changed
*/
class MainContainer extends Component {
  render() {
    return (
      <div className="main-container">
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
              <div className="cloud-storage-name-info float-left">
                <img src={googleDrive} alt="One Drive" />
                <br />
                One Drive
              </div>
              <div className="float-right">
                <i className="cloud-storage-name-value">
                  <MdMoreHoriz size={24} />
                </i>
              </div>
            </div>
            <div className="cloud-storage-amount clearfix">
              <div className="cloud-storage-amount-used float-left">45 GB</div>
              <div className="cloud-storage-amount-total float-right">
                50 GB
              </div>
            </div>
            <div className="storage-progress-bar-individual"></div>
          </div>
          <div className="cloud-storage-card second-card">
            <div className="cloud-storage-name clearfix">
              <div className="cloud-storage-name-info float-left">
                <img src={dropBox} alt="Drop Box" />
                <br />
                Dropbox
              </div>
              <div className="float-right">
                <i className="cloud-storage-name-value">
                  <MdMoreHoriz size={24} />
                </i>
              </div>
            </div>
            <div className="cloud-storage-amount clearfix">
              <div className="cloud-storage-amount-used float-left">45 GB</div>
              <div className="cloud-storage-amount-total float-right">
                50 GB
              </div>
            </div>
            <div className="storage-progress-bar-individual"></div>
          </div>
          <div className="cloud-storage-card">
            <div className="cloud-storage-name clearfix">
              <div className="cloud-storage-name-info float-left">
                <img src={oneDrive} alt="One Drive" />
                <br />
                One Drive
              </div>
              <div className="float-right">
                <i className="cloud-storage-name-value">
                  <MdMoreHoriz size={24} />
                </i>
              </div>
            </div>
            <div className="cloud-storage-amount clearfix">
              <div className="cloud-storage-amount-used float-left">45 GB</div>
              <div className="cloud-storage-amount-total float-right">
                50 GB
              </div>
            </div>
            <div className="storage-progress-bar-individual"></div>
          </div>
        </div>
        {/* cloud storage card ends here */}

        {/* Folder Starts Here */}
        <div className="main-container-header clearfix">
          <div className="main-container-header-name float-left">Folders</div>
          <div className="main-container-header-view float-right">View All</div>
        </div>
        <div className="card">
          <div className="shared-folder-card">
            <div className=" clearfix">
              <div className="float-left">
                <i className="shared-folder-card-info-name">
                  <FaFolder size={32} />
                </i>
                <br />
                Analytics
                <br />
                15 Files
              </div>
              <div className="shared-folder-card-info-people float-right"></div>
            </div>
          </div>
          <div className="shared-folder-card second-card">
            <div className=" clearfix">
              <div className="float-left">
                <i className="shared-folder-card-info-name">
                  <FaFolder size={32} />
                </i>
                <br />
                Assets
                <br />
                345 Files
              </div>
              <div className="shared-folder-card-info-people float-right"></div>
            </div>
          </div>
          <div className="shared-folder-card">
            <div className=" clearfix">
              <div className="float-left">
                <i className="shared-folder-card-info-name">
                  <FaFolder size={32} />
                </i>
                <br />
                Marketing
                <br />
                143 Files
              </div>
              <div className="shared-folder-card-info-people float-right"></div>
            </div>
          </div>
        </div>
        {/* Folder ends here */}

        {/* Recent Files start here */}
        <div className="main-container-header clearfix">
          <div className="main-container-header-name float-left">
            Recent Files
          </div>
          <div className="main-container-header-view float-right">View All</div>
        </div>
        <table className="recent-files-table">
          <thead>
            <tr>
              <th>
                Name <BsArrowUpShort />
              </th>
              <th>Members</th>
              <th>Last Modified</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img className="file-icon" src={zipIcon} alt="file icon" />
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
                <img className="file-icon" src={docIcon} alt="file icon" />
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
                <img className="file-icon" src={pdfIcon} alt="file icon" />
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
    );
  }
}

export default MainContainer;
