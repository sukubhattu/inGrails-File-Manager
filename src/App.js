import React from "react";

// Importing  App CSS
import "./App.css";

// Importing Reset and Default CSS
import "./css/reset.css";
import "./css/style.css";

// Importing Fonts
import "./fonts/SFPro.ttf";

// Importing components
import MenuNav from "./components/menuNav/MenuNav";
import SideNav from "./components/sideNav/SideNav";
import MainContainer from "./components/mainContainer/MainContainer";
import Storage from "./components/storage/Storage";

function App() {
  return (
    <div className="App">
      <div className="main-wrapper">
        <div className="menu-nav-wrapper">
          <MenuNav />
        </div>
        <div className="side-nav-wrapper">
          <SideNav />
        </div>
        <div className="main-container-wrapper">
          <MainContainer />
        </div>
        <div className="storage-wrapper">
          <Storage />
        </div>
      </div>
    </div>
  );
}

export default App;
