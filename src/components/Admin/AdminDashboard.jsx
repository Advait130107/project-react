import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserCog,
  FaUsers,
  FaCalendarAlt,
  FaChartBar,
  FaSignOutAlt,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem("login");
    const role = localStorage.getItem("role");

    if (!login || role !== "admin") {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="container-fluid bg-light min-vh-100 p-4">
      <div className="text-center mb-4">
        <Header />
      </div>

      <div className="row g-4">
        <div className="col-md-3">
          <div className="card shadow-lg p-3 text-center">
            <FaUsers size={50} className="text-primary mb-3" />
            <h5>Manage Students</h5>
            <button
              className="btn btn-outline-primary mt-2"
              onClick={() => navigate("/admin/students")}
            >
              Go
            </button>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-lg p-3 text-center">
            <FaCalendarAlt size={50} className="text-success mb-3" />
            <h5>Manage Events</h5>
            <button
              className="btn btn-outline-success mt-2"
              onClick={() => navigate("/admin/events")}
            >
              Go
            </button>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-lg p-3 text-center">
            <FaChartBar size={50} className="text-warning mb-3" />
            <h5>Reports</h5>
            <button
              className="btn btn-outline-warning mt-2"
              onClick={() => navigate("/admin/reports")}
            >
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
