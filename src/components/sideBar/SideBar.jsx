import React from "react";
import "./SideBar.css";

const Sidebar = () => (
  <>
    <div class="sidebar">
      <div>
        <div class="logo">
          party<span>witty</span>
        </div>

        <ul class="menu">
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

      <div class="wrapper">
        <div class="top">
          <div class="menu-icon">☰</div>
          <div class="title">More</div>
        </div>

        <div class="offer-card">
          <div class="crown">👑</div>

          <div class="offer-text">
            <h3>Corporate Employee Offer</h3>
            <p>1 Month For ₹1</p>
          </div>
        </div>

        <div class="user-card">
          <div class="user-left">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="user"
            />

            <div class="user-info">
              <h4>Zeeshan Ahmad</h4>
              <p>Indus Global Pvt Ltd Admin</p>
            </div>
          </div>

          <div class="arrow">↗</div>
        </div>
      </div>
    </div>
  </>
);

export default Sidebar;
