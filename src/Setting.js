import React from 'react';
import './Setting.css';

export default function Setting() {
  return (
    <>
      <div className="setting-main-body">
        <div className="setting-options">
          <div className="option">
            <i className="fa-solid fa-user"></i>
            <a href='#'>Profile Settings</a>
          </div>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="setting-options">
          <div className="option">
            <i className="fa-solid fa-user-clock"></i>
            <a href='#'>Convert to Driver</a>
          </div>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="setting-options">
          <div className="option">
            <i className="fa-solid fa-money-bill"></i>
            <a href='#'>Refer & Earn</a>
          </div>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="setting-options">
          <div className="option">
            <i className="fa-solid fa-wand-magic-sparkles"></i>
            <a href='#'>Emergency</a>
          </div>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="setting-options">
          <div className="option">
            <i className="fa-solid fa-bell"></i>
            <a href='#'>Push Notifications</a>
          </div>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="setting-options">
          <div className="option">
            <i className="fa-solid fa-info"></i>
            <a href='#'>About Us</a>
          </div>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="setting-options">
          <div className="option">
            <i className="fa-solid fa-arrow-right-to-bracket"></i>
            <a href='#'>Logout</a>
          </div>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </>
  )
}
