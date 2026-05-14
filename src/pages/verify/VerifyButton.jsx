import React from "react";
import "./VerifyButton.css";

const VerifyButton = () => {
  return (
    <div>
      <div class="modal-box">
        {/* <button class="close-btn">✕</button> */}

        <div class="icon-wrapper">
          <div class="profile-circle">
            <div class="profile-icon">
              <span class="eye left"></span>
              <span class="eye right"></span>
            </div>
          </div>

          <div class="small-btn">✦</div>
        </div>

        <h1>You’re one step away</h1>

        <p class="subtitle">
          Verify your profile to send this invite and connect with people around
          you.
        </p>

        <div class="features">
          <div class="feature">
            <div class="check">✓</div>
            <span>Builds trust instantly</span>
          </div>

          <div class="feature">
            <div class="check">✓</div>
            <span>Better chances she accepts</span>
          </div>

          <div class="feature">
            <div class="check">✓</div>
            <span>Unlocks special invites</span>
          </div>
        </div>

        <button class="verify-btn">Verify & Send Invite</button>

        <div class="footer-text">TAKES LESS THAN 30 SECONDS</div>
      </div>
    </div>
  );
};

export default VerifyButton;
