import React from "react";

// Import css
import "./Storage.css";

// import image
import document1 from "./img/document.png";
import image1 from "./img/image.png";
import media1 from "./img/media.png";
import other1 from "./img/other.png";
import Unknown1 from "./img/unknown.png";
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
        <div className="storage-category-row">
          <div className="storage-category-icon">
            <img className="" src={image1} alt="storage icon" />
          </div>
          <div className="storage-category-name">
            <p className="storage-category-name-head">Images</p>
            <p className="storage-category-name-sub">1,756 files</p>
          </div>
          <div className="storage-category-amount">15 GB</div>
        </div>

        <div className="storage-category-row">
          <div className="storage-category-icon">
            <img className="" src={document1} alt="storage icon" />
          </div>
          <div className="storage-category-name">
            <p className="storage-category-name-head">Documents</p>
            <p className="storage-category-name-sub">756 files</p>
          </div>
          <div className="storage-category-amount">256 MB</div>
        </div>

        <div className="storage-category-row">
          <div className="storage-category-icon">
            <img className="" src={media1} alt="storage icon" />
          </div>
          <div className="storage-category-name">
            <p className="storage-category-name-head">Media</p>
            <p className="storage-category-name-sub">200 files</p>
          </div>
          <div className="storage-category-amount">15 GB</div>
        </div>

        <div className="storage-category-row">
          <div className="storage-category-icon">
            <img className="" src={other1} alt="storage icon" />
          </div>
          <div className="storage-category-name">
            <p className="storage-category-name-head">Other Files</p>
            <p className="storage-category-name-sub">1,756 files</p>
          </div>
          <div className="storage-category-amount">15 GB</div>
        </div>

        <div className="storage-category-row">
          <div className="storage-category-icon">
            <img className="" src={Unknown1} alt="storage icon" />
          </div>
          <div className="storage-category-name">
            <p className="storage-category-name-head">Unknown Files</p>
            <p className="storage-category-name-sub">1,756 files</p>
          </div>
          <div className="storage-category-amount">15 GB</div>
        </div>
      </div>

      <div className="storage-upgrade">
        <img className="" src={upgrade1} alt="storage icon" />
        <h2>Upgrade Account!</h2>
        <p>5 integration, 30 team members, advanced features for teams</p>
        <button>Upgrade</button>
      </div>
    </div>
  );
}

export default Storage;
