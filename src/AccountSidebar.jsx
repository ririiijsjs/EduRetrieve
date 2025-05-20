import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUser, FaCommentDots, FaInfoCircle, FaSignOutAlt, FaArrowLeft } from "react-icons/fa";
import "./css/AccountSidebar.css";
import "./css/LogoutModal.css";

const AccountSidebar = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    setShowModal(true);
  };

  const confirmLogout = () => {
    navigate("/login");
  };

  return (
    <>
      <aside className="account-sidebar">
        <div className="back-button-container">
          <button className="back-button" onClick={() => navigate("/dashboard")}>
            <FaArrowLeft />
          </button>
        </div>
        <hr className="sidebar-divider" />
        <nav>
          <ul>
            <li>
              <NavLink
                to="/account"
                className={({ isActive }) =>
                  isActive ? "account-sidebar-button active" : "account-sidebar-button"
                }
              >
                <FaUser className="icon" /> Account
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/feedback"
                className={({ isActive }) =>
                  isActive ? "account-sidebar-button active" : "account-sidebar-button"
                }
              >
                <FaCommentDots className="icon" /> Feedback
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "account-sidebar-button active" : "account-sidebar-button"
                }
              >
                <FaInfoCircle className="icon" /> About
              </NavLink>
            </li>
          </ul>
        </nav>
        <button className="logout-button" onClick={handleLogout}>
          <FaSignOutAlt className="icon" /> Logout
        </button>
      </aside>

      {showModal && (
        <div className="modal-overlay">
          <div className="logout-modal">
            <p>Are you sure you want to logout?</p>
            <div className="modal-buttons">
              <button onClick={confirmLogout} className="confirm-button">Logout</button>
              <button onClick={() => setShowModal(false)} className="cancel-button">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccountSidebar;


