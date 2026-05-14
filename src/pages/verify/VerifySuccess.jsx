import React, { useState } from "react";
import "./VerifySuccess.css";

const VerifySuccess = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const closeCard = () => {
    setShow(false);
    console.log("Card closed");
  };
  return (
    <div>
      <div className="verification-card">
        <div className="profile-wrapper">
          <div className="floating top-icon">✦</div>
          <div className="floating bottom-icon">♥</div>
          <div className="profile-ring">
            <div className="profile-image">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
                alt="profile"
              />

              <div className="verified-badge">✔ VERIFIED</div>
            </div>
          </div>
        </div>

        <h1>You’re verified</h1>

        <p className="subtitle">No fake vibes here. You’re almost in</p>

        <div className="progress-wrapper">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <div className="match-text">IDENTITY MATCH 98.4%</div>
        </div>
        <button className="dashboard-btn" onClick={() => setShow(false)}>
          Go to Dashboard
        </button>
        <div className="footer">No fake vibes here. You’re almost in</div>
      </div>
    </div>
  );
};

export default VerifySuccess;
