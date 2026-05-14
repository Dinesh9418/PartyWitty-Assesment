import React from "react";
import "./SideBar.css";

const Sidebar = () => (
  <>
    <div className="sidebar">
      <div>
        <div className="logo">
          party<span>witty</span>
        </div>

        <ul className="menu">
          <li>📋 My Plan</li>
          <li>⚒️ My Bids</li>
          <li>↻ My Booking</li>
          <li>🔍 Search</li>
          <li>💬 Chat Room</li>
          <li>🔔 Notifications</li>
          <li>🤍 Save & Like</li>
          <li>🎁 Rewards</li>
        </ul>
      </div>

      <div className="wrapper">
        <div className="top">
          <div className="menu-icon">☰</div>
          <div className="title">More</div>
        </div>

        <div className="offer-card">
          <div className="crown">👑</div>

          <div className="offer-text">
            <h3>Corporate Employee Offer</h3>
            <p>1 Month For ₹1</p>
          </div>
        </div>

        <div className="user-card">
          <div className="user-left">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="user"
            />

            <div className="user-info">
              <h4>Zeeshan Ahmad</h4>
              <p>Indus Global Pvt Ltd Admin</p>
            </div>
          </div>

          <div className="arrow">↗</div>
        </div>
      </div>
    </div>
  </>
);

export default Sidebar;
