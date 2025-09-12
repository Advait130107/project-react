import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaDumbbell, FaUserCircle } from "react-icons/fa";
import Header from "./Header";
import StatCard from "./StatCard";
import QuickLinks from "./QuickLinks";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const verify = localStorage.getItem("login");
    if (!verify) {
      navigate("/login");
    }
  }, [navigate]);

  const goToEvents = () => navigate("/student/events");
  const goToEquipment = () => navigate("/student/equipment");

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      <div className="container flex-grow-1 py-4">
        {/* Header */}
        <Header />

        {/* Stats Section */}
        <div className="row text-center mb-4">
          <StatCard
            icon={<FaCalendarAlt size={30} />}
            title="Upcoming Events"
            value="3"
            color="success"
          />
          <StatCard
            icon={<FaDumbbell size={30} />}
            title="Available Equipment"
            value="15 Items"
            color="warning"
          />
          <StatCard
            icon={<FaUserCircle size={30} />}
            title="Logged In"
            value="Student ID: 123"
            color="info"
          />
        </div>

        {/* Quick Links */}
        <QuickLinks onViewEvents={goToEvents} onViewEquipment={goToEquipment} />
      </div>
    </div>
  );
};

export default Dashboard;
