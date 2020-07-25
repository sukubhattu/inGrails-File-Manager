import React, { Component } from "react";

// Import CSS
import "./MainContainer.css";

// Import icons
import { FaGoogleDrive, FaDropbox } from "react-icons/fa";
import { GrOnedrive } from "react-icons/gr";
import { MdMoreHoriz } from "react-icons/md";
import { BsArrowUpShort, BsFileZip } from "react-icons/bs";
import { FcFolder } from "react-icons/fc";

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
        <div className="cloud-storage">
          <div className="cloud-storage-card">
            <div className="cloud-storage-name cleafix">
              <div className="cloud-storage-name-info float-left">
                <FaGoogleDrive />
                <br />
                Google Drive
              </div>
              <div className="cloud-storage-name-value float-right">
                <MdMoreHoriz />
              </div>
            </div>
            <div className="cloud-storage-amount clearfix">
              <div className="cloud-storage-amount-used float-left">45 GB</div>
              <div className="cloud-storage-amount-total float-right">
                50 GB
              </div>
            </div>
            <div className="storage-progress-bar"></div>
          </div>
          <div className="cloud-storage-card second-card">
            <div className="cloud-storage-name clearfix">
              <div className="cloud-storage-name-info float-left">
                <FaDropbox />
                <br />
                Dropbox
              </div>
              <div className="cloud-storage-name-value float-right">
                <MdMoreHoriz />
              </div>
            </div>
            <div className="cloud-storage-amount clearfix">
              <div className="cloud-storage-amount-used float-left">45 GB</div>
              <div className="cloud-storage-amount-total float-right">
                50 GB
              </div>
            </div>
            <div className="storage-progress-bar"></div>
          </div>
          <div className="cloud-storage-card">
            <div className="cloud-storage-name clearfix">
              <div className="cloud-storage-name-info float-left">
                <GrOnedrive />
                <br />
                One Drive
              </div>
              <div className="cloud-storage-name-value float-right">
                <MdMoreHoriz />
              </div>
            </div>
            <div className="cloud-storage-amount clearfix">
              <div className="cloud-storage-amount-used float-left">45 GB</div>
              <div className="cloud-storage-amount-total float-right">
                50 GB
              </div>
            </div>
            <div className="storage-progress-bar"></div>
          </div>
        </div>
        {/* cloud storage card ends here */}

        {/* Folder Starts Here */}
        <div className="main-container-header clearfix">
          <div className="main-container-header-name float-left">Folders</div>
          <div className="main-container-header-view float-right">View All</div>
        </div>
        <div className="shared-folder">
          <div className="shared-folder-card">
            <div className="shared-folder-card-info clearfix">
              <div className="shared-folder-card-info-name float-left">
                <FcFolder />
                <br />
                Analytics
                <br />
                15 Files
              </div>
              <div className="shared-folder-card-info-people float-right"></div>
            </div>
          </div>
          <div className="shared-folder-card second-card">
            <div className="shared-folder-card-info clearfix">
              <div className="shared-folder-card-info-name float-left">
                <FcFolder />
                <br />
                Analytics
                <br />
                15 Files
              </div>
              <div className="shared-folder-card-info-people float-right"></div>
            </div>
          </div>
          <div className="shared-folder-card">
            <div className="shared-folder-card-info clearfix">
              <div className="shared-folder-card-info-name float-left">
                <FcFolder />
                <br />
                Analytics
                <br />
                15 Files
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
                <BsFileZip />
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
