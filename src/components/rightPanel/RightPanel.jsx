import React, { useState } from "react";
import "./RightPanel.css";
import VerifyButton from "../../pages/verify/VerifyButton";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

const RightPanel = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="right-panel">
        <div className="user-box">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
            alt="user"
          />

          <h3>Make Your First Move</h3>
          <p>
            Verify your profile to start sending invites and offering drinks.
          </p>
        </div>

        <div className="steps">
          <h4>How It Works</h4>

          <div className="step">
            <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop" />

            <div className="step-content">
              <h5>Spot Your Person</h5>
              <p>Pick someone you'd genuinely enjoy going out with.</p>
            </div>
          </div>

          <div className="step">
            <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop" />

            <div className="step-content">
              <h5>Send a Drink</h5>
              <p>Offer their first drink your way of saying let's go out.</p>
            </div>
          </div>

          <div className="step">
            <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop" />

            <div className="step-content">
              <h5>They Accept</h5>
              <p>Once accepted, it's a confirmed plan. No endless chatting.</p>
            </div>
          </div>
        </div>

        <div className="benefits">
          <p>✅ Get noticed faster</p>
          <p>✅ Higher chances your invite gets accepted</p>
          <p>✅ Unlock drink invites & premium interactions</p>
          <p>✅ Build trust with every profile visit</p>
        </div>

        <Button className="verify-btn" variant="primary" onClick={handleShow}>
          GET VERIFIED
        </Button>

        <p className="get"> Takes less than 60 seconds</p>
        <div className="later">Maybe later</div>
      </div>
      <Modal className="modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <VerifyButton />
      </Modal>
    </div>
  );
};

export default RightPanel;
