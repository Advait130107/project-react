import React, { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import { FaSignInAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import students from "../Data/students.json";
import admins from "../Data/admins.json";
const Login = () => {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const admin = admins.find(
      (a) => a.id === studentId && a.password === password
    );
    const student = students.find(
      (s) => s.id === studentId && s.password === password
    );

    if (admin) {
      toast.success("Admin login successful!");
      localStorage.setItem("login", "true");
      localStorage.setItem("role", "admin");
      navigate("/admin/dashboard");
    } else if (student) {
      toast.success("Student login successful!");
      localStorage.setItem("login", "true");
      localStorage.setItem("role", "student");
      navigate("/student/dashboard");
    } else {
      toast.error("Invalid credentials");
    }
  };

  const handleReset = () => {
    setStudentId("");
    setPassword("");
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="text-center mb-4">
        <FaSignInAlt
          className="me-2"
          onClick={() => {
            navigate("/");
          }}
        />
        <h1 className="text-primary fw-bold">MES ABASAHEB GARWARE</h1>
      </div>

      <div
        className="card shadow-lg p-4"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <div className="text-center mb-3">
          <FaCircleUser size={80} color="#0d6efd" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="studentId" className="form-label fw-semibold">
              User ID
            </label>
            <input
              type="text"
              className="form-control"
              id="studentId"
              placeholder="Enter Student/Admin ID"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-outline-secondary w-45"
              onClick={handleReset}
            >
              Reset
            </button>
            <button type="submit" className="btn btn-primary w-45">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
