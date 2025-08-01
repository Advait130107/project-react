import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 ">
      <div className="container text-center">
        <p className="mb-1">
          &copy; {new Date().getFullYear()} MES Abasaheb Garware College
        </p>
        <p className="mb-0">
          Designed for managing sports events and equipment
        </p>
        <small className="text-muted">Powered by React & Bootstrap</small>
      </div>
    </footer>
  );
};

export default Footer;
