import React, { Component } from "react";

// Import css
import "./Storage.css";

/* Leaving as stateful or class components
  Initially this code is just UI component.
  Further it can be changed
*/
class Storage extends Component {
  render() {
    return (
      <div className="storage">
        <div className="storage-amount">
          <div className="used">
            42GB <br />
            Used
          </div>
          <div className="total">
            50GB
            <br />
            Upgrade
          </div>
        </div>

        <div className="storage-progress-bar"></div>

        <div className="storage-category-row">
          <div className="storage-category-icon">
            <img className="" src="https://picsum.photos/40/40" alt="image" />
          </div>
          <div className="storage-category-name">
            Images <br />
            1,500 files
          </div>
          <div className="storage-category-amount">15 GB</div>
        </div>

        <div className="storage-category-row">
          <div className="storage-category-icon">
            <img className="" src="https://picsum.photos/40/40" alt="image" />
          </div>
          <div className="storage-category-name">
            Documents
            <br />
            1,500 files
          </div>
          <div className="storage-category-amount">15 GB</div>
        </div>

        <div className="storage-category-row">
          <div className="storage-category-icon">
            <img className="" src="https://picsum.photos/40/40" alt="image" />
          </div>
          <div className="storage-category-name">
            Media
            <br />
            1,500 files
          </div>
          <div className="storage-category-amount">15 GB</div>
        </div>

        <div className="storage-category-row">
          <div className="storage-category-icon">
            <img className="" src="https://picsum.photos/40/40" alt="image" />
          </div>
          <div className="storage-category-name">
            Other Files
            <br />
            1,500 files
          </div>
          <div className="storage-category-amount">15 GB</div>
        </div>

        <div className="storage-category-row">
          <div className="storage-category-icon">
            <img className="" src="https://picsum.photos/40/40" alt="image" />
          </div>
          <div className="storage-category-name">
            Unknown Files
            <br />
            1,500 files
          </div>
          <div className="storage-category-amount">15 GB</div>
        </div>

        <div className="storage-upgrade">
          <img className="" src="https://picsum.photos/200/200" alt="image" />
          Upgrade Account!
          <br />5 integration, 30 team members, advanced features for teams
          <br />
          <button>Upgrade</button>
        </div>
      </div>
    );
  }
}

export default Storage;
