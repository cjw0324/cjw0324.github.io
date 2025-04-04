import React from "react";
import profilePhoto from "../assets/profile.jpg";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="profile-section">
          <div className="profile-photo-container">
            <img src={profilePhoto} alt="최재우" className="profile-photo" />
          </div>
          <div className="profile-text">
            <h1 className="name-korean">
              <div className="intro-text">
                <span>소통으로 방향을 찾아,</span>
                <br />
                <span>협업으로 해답을 만드는 개발자</span>
              </div>
              <div className="large-name">최재우</div>
            </h1>
          </div>
        </div>
        <div className="contact-section">
          <h2>Contact</h2>
          <p>Tel: 010-5404-3932</p>
          <p>Email: cchoi00332244@gmail.com</p>
          <p>
            Github:{" "}
            <a
              href="https://github.com/cjw0324"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/cjw0324
            </a>
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
