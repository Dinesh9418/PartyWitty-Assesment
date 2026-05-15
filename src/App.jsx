import React from "react";
import Sidebar from "./components/sideBar/SideBar";
import MainPage from "./components/mainPage/MainPage";
import "./App.css";
import RightPanel from "./components/rightPanel/RightPanel";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";

// Create a Home component for the main layout
const Home = () => (
  <div className="app-container">
    <Sidebar />
    <MainPage />
    <RightPanel />
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/WIP" element={<ErrorPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
