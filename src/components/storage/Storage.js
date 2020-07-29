import React from "react";

// Import css
import "./Storage.css";

// Import dummy storage data
import storageFiles from "./storage-files";

// Import image
import upgrade1 from "./img/upgrade.png";
/* Leaving as stateless or function component
  Initially this code is just UI component.
  Further it can be changed
*/
function Storage() {
  return (
    <div className="storage">
      <div className="storage-amount">
        <div className="storage-used">
          <h2>45.5 GB</h2>
          <p>Used</p>
        </div>
        <div className="storage-total">
          <h2>50 GB</h2>
          <p>Upgrade</p>
        </div>
      </div>

      <div className="storage-progress-bar">
        <div className="storage-progress-bar-inner1">
          <div className="storage-progress-bar-inner2">
            <div className="storage-progress-bar-inner3"></div>
          </div>
        </div>
      </div>

      <div className="storage-category">
        {storageFiles.map((file, index) => (
          <div className="storage-category-row" key={index}>
            <div className="storage-category-icon">
              <img className="" src={file.icon} alt="storage icon" />
            </div>
            <div className="storage-category-name">
              <p className="storage-category-name-head">{file.name}</p>
              <p className="storage-category-name-sub">{file.filesNum}</p>
            </div>
            <div className="storage-category-amount">{file.size}</div>
          </div>
        ))}
      </div>

      <div className="storage-upgrade">
        <img className="" src={upgrade1} alt="storage icon" />
        <h2>Upgrade Account!</h2>
        <p>5 integration, 30 team members, advanced features for teams</p>
        <button>Upgrade</button>
      </div>
      {/* Live twitter feed */}
      <div className="twitter-feed">
        <a
          className="twitter-timeline"
          data-height="400px"
          href="https://twitter.com/realpython"
        >
          Tweets by RealPython
        </a>{" "}
      </div>
      {/* Live twitter feed ends here */}
    </div>
  );
}

export default Storage;
