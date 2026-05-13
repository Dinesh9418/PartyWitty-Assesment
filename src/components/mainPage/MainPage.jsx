import React, { useState } from "react";

import "./MainPage.css";
import { Button, Modal } from "react-bootstrap";

const MainPage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="main">
        {/* <!-- CENTER --> */}

        <div className="feed-section">
          <button className="feed-btn">EXPLORE FEED</button>

          <div className="profile-card">
            <div className="image-box">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
                alt="girl"
              />

              <div className="overlay"></div>

              <div className="profile-info">
                <h2>Zoe Miller, 22</h2>
                <button className="match-btn">+ Mate</button>
                <p>4 Mutual Mates</p>
                <div className="tags">
                  <div className="tag">Bollywood Nights</div>
                  <div className="tag">Chill Crowd</div>
                  <div className="tag">Party Regular</div>
                </div>
              </div>
            </div>

            <div className="actions">
              <button className="circle-btn">✕</button>
              {/* <button className="go-btn">🔥 Go Tonight</button> */}
              <Button className="go-btn" variant="primary" onClick={handleShow}>
                🔥 Go Tonight
              </Button>

              <button className="circle-btn">♡</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Modal className="modal" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              You choose her{" "}
              <p className="modal-p">
                You're about to share her a <span>special invite</span>
              </p>
            </Modal.Title>
          </Modal.Header>
          <div className="profile-card">
            <div className="image-box">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
                alt="girl"
              />

              <div className="overlay"></div>

              <div className="profile-info">
                <h2>Zoe Miller, 22</h2>
                <button className="match-btn">+ Mate</button>
                <p>4 Mutual Mates</p>
                <div className="tags">
                  <div className="tag">Bollywood Nights</div>
                  <div className="tag">Chill Crowd</div>
                  <div className="tag">Party Regular</div>
                </div>
              </div>
            </div>

            <div className="actions">
              {/* <button className="circle-btn">✕</button> */}
              <button className="go-btn">Make your move</button>
              {/* <button className="circle-btn">♡</button> */}
            </div>
            <p className="drink">Add a drink to introduce yourself</p>
          </div>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer> */}
        </Modal>
      </div>
    </div>
  );
};

export default MainPage;
