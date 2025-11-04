import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import StudentsPage from "./pages/StudentsPage";
import StudentsForm from "./components/StudentForm";
import StudentsTable from "./components/StudentsTable";
import "./styles/App.css";

export default function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1> Student Management System</h1>

        <nav className="nav-bar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/table" className="nav-link">Table</Link>
        </nav>

      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<StudentsPage />} />
          <Route path="/add" element={<StudentsForm />} />
          <Route path="/students" element={<StudentsTable />} />
          <Route path="table" element={<StudentsTable />} />
        </Routes>
      </main>
    </div>
  );
}
