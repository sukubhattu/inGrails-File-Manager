import React from "react";
import "./App.css";

// Importing components
import MenuNav from "./components/MenuNav";
import SideNav from "./components/SideNav";
import MainContainer from "./components/MainContainer";
import Storage from "./components/Storage";

function App() {
  return (
    <div className="App">
      <MenuNav />
      <SideNav />
      <MainContainer />
      <Storage />
    </div>
  );
}

export default App;
