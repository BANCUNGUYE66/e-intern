import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isLoggedIn] = useState(false); // We'll implement auth later

  return (
    <nav className="nav">
      <div className="nav-brand">
        <Link to="/">e-Intern</Link>
      </div>
      <div className="nav-links">
        {isLoggedIn ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/profile">Profile</Link>
            <button className="nav-button">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register" className="nav-button">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 