import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaDumbbell, FaSignInAlt } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-dark text-light min-vh-100 py-4">
      <div className="container">
        <header className="text-center mb-5">
          <h1 className="display-4">🏅 Sports Tracker</h1>
          <p className="lead">
            Your hub for managing sports events and equipment
          </p>
          <button
            className="btn btn-primary mt-3"
            onClick={() => navigate("/login")}
          >
            <FaSignInAlt className="me-2" />
            Login
          </button>
        </header>

        <section className="mb-4 p-4 bg-secondary rounded shadow">
          <h2 className="h4 mb-3">
            <FaCalendarAlt className="me-2" />
            Upcoming Events
          </h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-secondary text-light border-light">
              ⚽ Football Tournament - Sep 15, 2025
            </li>
            <li className="list-group-item bg-secondary text-light border-light">
              🏀 Basketball League - Oct 3, 2025
            </li>
            <li className="list-group-item bg-secondary text-light border-light">
              🏃 Marathon Challenge - Nov 12, 2025
            </li>
          </ul>
        </section>

        <section className="mb-4 p-4 bg-secondary rounded shadow">
          <h2 className="h4 mb-3">
            <FaDumbbell className="me-2" />
            Equipment Inventory
          </h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-secondary text-light border-light">
              10 Footballs - Available
            </li>
            <li className="list-group-item bg-secondary text-light border-light">
              8 Basketballs - In Use
            </li>
            <li className="list-group-item bg-secondary text-light border-light">
              5 Dumbbell Sets - Available
            </li>
          </ul>
        </section>

        <footer className="text-center text-secondary mt-5">
          &copy; 2025 Sports Tracker | All rights reserved
        </footer>
      </div>
    </div>
  );
}

export default Home;
