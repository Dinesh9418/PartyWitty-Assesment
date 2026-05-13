import React from "react";
import Sidebar from "./components/sideBar/SideBar";
import MainPage from "./components/mainPage/MainPage";
import "./App.css";
import RightPanel from "./components/rightPanel/RightPanel";

function App() {
  return (
    <div className="app-container">
      {/* <Header /> */}
      <Sidebar />
      <MainPage />
      <RightPanel />
    </div>
  );
}

export default App;
