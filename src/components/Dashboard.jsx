import React, { useEffect } from "react";
import { FaCalendarAlt, FaDumbbell, FaUserCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const verify = localStorage.getItem("login");
    if (!verify) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("login");
    navigate("/login"); // Redirect to login after logout
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      <div className="container flex-grow-1 py-4">
        {/* Header */}
        <div className="text-center mb-4">
          <FaUserCircle size={60} className="text-primary mb-2" />{" "}
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
          <h2 className="fw-bold">Welcome to the Sports Dashboard</h2>
          <p className="text-muted">Manage events, equipment, and more</p>
        </div>

        {/* Stats Section */}
        <div className="row text-center mb-4">
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <FaCalendarAlt size={30} className="text-success mb-2" />
                <h5 className="card-title">Upcoming Events</h5>
                <p className="card-text fw-bold">3</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <FaDumbbell size={30} className="text-warning mb-2" />
                <h5 className="card-title">Available Equipment</h5>
                <p className="card-text fw-bold">15 Items</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <FaUserCircle size={30} className="text-info mb-2" />
                <h5 className="card-title">Logged In</h5>
                <p className="card-text fw-bold">Student ID: 123</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links / Buttons */}
        <div className="d-flex justify-content-center gap-3 mb-4">
          <button className="btn btn-outline-primary">View Events</button>
          <button className="btn btn-outline-success">View Equipment</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
