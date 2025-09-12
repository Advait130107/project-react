import React from "react";
import { Navigate } from "react-router-dom";

// role can be "admin" or "student"
const ProtectedRoute = ({ children, role }) => {
  const isLoggedIn = localStorage.getItem("login");
  const userRole = localStorage.getItem("role");

  if (!isLoggedIn) {
    // Not logged in
    return <Navigate to="/login" replace />;
  }

  if (role && userRole !== role) {
    // Logged in but wrong role
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
