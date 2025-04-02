import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Ensure correct import

const Header: React.FC = () => (
  <nav className="navbar"> {/* Use the navbar class from styles.css */}
    <h1>Contacts App</h1>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/add">Add Contact</Link>
    </div>
  </nav>
);

export default Header;
