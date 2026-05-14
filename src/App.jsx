import React from "react";
import Sidebar from "./components/sideBar/SideBar";
import MainPage from "./components/mainPage/MainPage";
import "./App.css";
import RightPanel from "./components/rightPanel/RightPanel";
import VerifyButton from "./pages/verify/VerifyButton";
import { Route, Routes } from "react-router-dom";
import VerifySuccess from "./pages/verify/VerifySuccess";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <MainPage />
      <RightPanel />
      {/* <Routes>
        <Route path="/verifybutton" element={<VerifyButton />} />
      </Routes> */}
    </div>
  );
}

export default App;
