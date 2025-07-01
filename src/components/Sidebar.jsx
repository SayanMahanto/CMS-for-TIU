import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <nav
        style={{
          width: "200px",
          height: "100vh",
          background: "#f0f0f0",
          padding: "1rem",
          boxSizing: "border-box",
        }}
      >
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/report">Report</Link>
          </li>
          <li>
            <Link to="/content">Content</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
