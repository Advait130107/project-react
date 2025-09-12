import React from "react";

const QuickLinks = ({ onViewEvents, onViewEquipment }) => {
  return (
    <div className="d-flex justify-content-center gap-3 mb-4">
      <button className="btn btn-outline-primary" onClick={onViewEvents}>
        View Events
      </button>
      <button className="btn btn-outline-success" onClick={onViewEquipment}>
        View Equipment
      </button>
    </div>
  );
};

export default QuickLinks;
