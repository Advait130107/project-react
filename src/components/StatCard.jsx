import React from "react";

const StatCard = ({ icon, title, value, color }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card shadow-sm border-0">
        <div className="card-body text-center">
          <div className={`mb-2 text-${color}`}>{icon}</div>
          <h5 className="card-title">{title}</h5>
          <p className="card-text fw-bold">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
