import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navigation; 