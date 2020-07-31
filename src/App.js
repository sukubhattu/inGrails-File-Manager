import React, { Component } from "react";

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

class App extends Component {
  /* 
  This state and function is passed to child component MenuNav to toggle storage component 
  Initially storage component is shown.
  On toggle storage component is shown or hidden
  */
  state = {
    buttonON: true,
  };

  changeButton = (isButtonOn) => {
    if (isButtonOn) {
      this.setState({
        buttonON: true,
      });
    } else {
      this.setState({
        buttonON: false,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="main-wrapper">
          <div className="menu-nav-wrapper">
            <MenuNav
              changeButtonFunction={this.changeButton}
              buttonON={this.state.buttonON}
            />
          </div>
          <div className="side-nav-wrapper">
            <SideNav />
          </div>

          <div
            // Depending on toggle value change css of main-container
            className={
              this.state.buttonON
                ? "main-container-wrapper"
                : "main-container-wrapper-without-storage"
            }
          >
            <MainContainer />
          </div>

          <div
            // Depending on toggle value change css of storage-container
            className={
              this.state.buttonON
                ? " storage-wrapper "
                : "storage-wrapper-nodisplay"
            }
          >
            <Storage />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
