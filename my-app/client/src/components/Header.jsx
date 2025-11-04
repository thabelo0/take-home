import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="brand">Student Management</h1>
        <nav className="main-nav">
          <Link to="/">Students</Link>
          <Link to="/add">Add Student</Link>
        </nav>
      </div>
    </header>
  );
}
