import { NavLink, Link } from "react-router-dom";
import { FaHome, FaRobot, FaChartBar, FaBook } from "react-icons/fa";
import "./css/sidebar.css";

const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar-content">
      <div className="profile-section">
        <Link to="/account" className="profile-pic">
          <img src="/profile.png" alt="Profile" className="profile-img" />
        </Link>
        <hr className="profile-divider" />
      </div>

      <nav>
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "sidebar-button active" : "sidebar-button"
              }
            >
              <FaHome className="icon" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/smart-qna"
              className={({ isActive }) =>
                isActive ? "sidebar-button active" : "sidebar-button"
              }
            >
              <FaRobot className="icon" /> Smart Q&A
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/progress-tracking"
              className={({ isActive }) =>
                isActive ? "sidebar-button active" : "sidebar-button"
              }
            >
              <FaChartBar className="icon" /> Progress
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/topics-and-subjects"
              className={({ isActive }) =>
                isActive ? "sidebar-button active" : "sidebar-button"
              }
            >
              <FaBook className="icon" /> Topics & Subjects
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Sidebar;







