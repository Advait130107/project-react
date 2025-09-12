import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role") || "User";

  const handleLogout = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="d-flex justify-content-between align-items-center mb-4 p-2 border-bottom">
      <div className="d-flex align-items-center">
        <FaUserCircle size={40} className="text-primary me-2" />
        <h4 className="fw-bold mb-0">
          Welcome, <span className="text-capitalize">{role}</span>
        </h4>
      </div>
      <button className="btn btn-danger btn-sm" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Header;
