import React, { useState, useRef } from "react";
import "./VerifyButton.css";
import { Button, Modal } from "react-bootstrap";
import VerifySuccess from "./VerifySuccess";

const VerifyButton = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const [faceDetected, setFaceDetected] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const intervalRef = useRef(null);

  const startCamera = async () => {
    try {
      setCameraActive(true);
      setIsVerifying(true);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setTimeout(detectFace, 500);
      }
    } catch (err) {
      console.error("Camera access denied:", err);
      alert("Camera permission denied.");
      setCameraActive(false);
      setIsVerifying(false);
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const detectFace = () => {
    intervalRef.current = setInterval(() => {
      if (
        videoRef.current &&
        canvasRef.current &&
        videoRef.current.readyState === 4
      ) {
        const context = canvasRef.current.getContext("2d");
        const video = videoRef.current;
        canvasRef.current.width = video.videoWidth;
        canvasRef.current.height = video.videoHeight;
        context.drawImage(video, 0, 0);

        const imageData = context.getImageData(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height,
        );
        const data = imageData.data;
        let variance = 0;
        for (let i = 0; i < data.length; i += 4) {
          variance += data[i] + data[i + 1] + data[i + 2];
        }
        if (variance > 1000000) {
          setFaceDetected(true);
        }
      }
    }, 500);
  };

  const stopCamera = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
    }
    setCameraActive(false);
  };

  const completeVerification = () => {
    stopCamera();
    setIsVerifying(false);
    setFaceDetected(false);
    setShow(true);
  };

  if (isVerifying && cameraActive) {
    return (
      <div>
        <div className="modal-box verification-active">
          <div className="camera-container">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="camera-feed"
            />
            <canvas ref={canvasRef} style={{ display: "none" }} />
            <div
              className={`face-detection-box ${faceDetected ? "detected" : ""}`}
            >
              <div className="detection-frame">
                {!faceDetected && (
                  <p className="detection-text">Position your face</p>
                )}
                {faceDetected && (
                  <p className="detection-text success">✓ Face detected</p>
                )}
              </div>
            </div>
          </div>
          <h2>Face Verification</h2>
          <p className="verification-status">
            {!faceDetected ? "Center your face in the frame" : "Face verified!"}
          </p>
          <div className="verification-actions">
            <button className="cancel-btn" onClick={stopCamera}>
              Cancel
            </button>
            {faceDetected && (
              <Button
                className="verify-btn"
                variant="primary"
                onClick={() => {
                  handleShow();
                  completeVerification();
                }}
              >
                Continue
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {!show && !isVerifying && (
        <div className="modal-box">
          <div className="icon-wrapper">
            <div className="profile-circle">
              <div className="profile-icon">
                <span className="eye left"></span>
                <span className="eye right"></span>
              </div>
            </div>
            <div className="small-btn">✦</div>
          </div>

          <h1>You're one step away</h1>

          <p className="subtitle">
            Verify your profile to send this invite and connect with people
            around you.
          </p>

          <div className="features">
            <div className="feature">
              <div className="check">✓</div>
              <span>Builds trust instantly</span>
            </div>

            <div className="feature">
              <div className="check">✓</div>
              <span>Better chances she accepts</span>
            </div>

            <div className="feature">
              <div className="check">✓</div>
              <span>Unlocks special invites</span>
            </div>
          </div>

          <button className="verify-btn" onClick={startCamera}>
            Verify & Send Invite
          </button>

          <div className="footer-text">TAKES LESS THAN 30 SECONDS</div>
        </div>
      )}

      {show && (
        <Modal className="modal" show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <VerifySuccess onClose={handleClose} />
        </Modal>
      )}
    </div>
  );
};

export default VerifyButton;
