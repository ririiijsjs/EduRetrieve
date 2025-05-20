import React from "react";
import "./css/AccountSettings.css";
import AccountSidebar from "./AccountSidebar";

const AccountSettings = () => {
  return (
    <div className="settings-container">
      <AccountSidebar />
      <div className="vertical-line"></div>
      <main className="content">
        <h2 className="header">Account Settings</h2>
        <hr className="content-divider" />
        <div className="form-section">
          <div className="profile-info">
          <img src="/profile.png" alt="Profile" className="profile-imgs" />
            <div>
              <p><strong>Username:</strong> <hr /></p>
              <p><strong>Email:</strong> <hr /></p>
              <div className="role-tags">
                <span className="role admin">Admin</span>
                <span className="role student">Student</span>
              </div>
              <hr />
            </div>
          </div>

          <div className="password-section">
            <h3>Change password:</h3>
            <label>Current password:
              <input type="password" />
            </label>
            <label>New password:
              <input type="password" />
            </label>
            <label>Confirm new password:
              <input type="password" />
            </label>
            <button className="change-btn">Change Account Password</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AccountSettings;

