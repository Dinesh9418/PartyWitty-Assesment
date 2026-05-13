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

      <div class="bottom-card">
        <h4>Corporate Employee Offer</h4>
        <p>1 Month For ₹1</p>
      </div>
    </div>
  </>
);

export default Sidebar;
