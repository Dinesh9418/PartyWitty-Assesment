import React from "react";
import Card from "./../card/Card";
import "./MainPage.css";

const MainPage = () => (
  <div>
    <div class="main">
      {/* <!-- CENTER --> */}

      <div class="feed-section">
        <button class="feed-btn">EXPLORE FEED</button>

        <div class="profile-card">
          <div class="image-box">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
              alt="girl"
            />

            <div class="overlay"></div>

            <div class="profile-info">
              <h2>Zoe Miller, 22</h2>
              <button class="match-btn">+ Mate</button>
              <p>4 Mutual Mates</p>
              <div class="tags">
                <div class="tag">Bollywood Nights</div>
                <div class="tag">Chill Crowd</div>
                <div class="tag">Party Regular</div>
              </div>
            </div>
          </div>

          <div class="actions">
            <button class="circle-btn">✕</button>
            <button class="go-btn">🔥 Go Tonight</button>
            <button class="circle-btn">♡</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MainPage;
