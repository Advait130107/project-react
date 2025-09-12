import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Login from "./components/Login";

// Student Components
import Dashboard from "./components/Dashboard";
import Equipment from "./components/Equipment";

// Admin Components
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminEvents from "./components/Admin/Events/AdminEvents";

// Utilities
import ProtectedRoute from "./components/Utilities/ProtectedRoute";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Student Routes */}
          <Route
            path="/student/*"
            element={
              <ProtectedRoute role="student">
                <Routes>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="equipment" element={<Equipment />} />
                </Routes>
              </ProtectedRoute>
            }
          />

          {/* Admin Routes */}
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute role="admin">
                <Routes>
                  <Route path="dashboard" element={<AdminDashboard />} />
                  <Route path="events" element={<AdminEvents />} />
                </Routes>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
