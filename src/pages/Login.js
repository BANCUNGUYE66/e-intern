import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'graduate' // Default role
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(formData.email, formData.password, formData.role);
      navigate('/dashboard');
    } catch (error) {
      setError('Failed to login: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Login to e-Intern</h2>
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>I am a:</label>
          <div className="role-selector">
            <label className={`role-option ${formData.role === 'graduate' ? 'selected' : ''}`}>
              <input
                type="radio"
                name="role"
                value="graduate"
                checked={formData.role === 'graduate'}
                onChange={handleChange}
              />
              Graduate
            </label>
            <label className={`role-option ${formData.role === 'company' ? 'selected' : ''}`}>
              <input
                type="radio"
                name="role"
                value="company"
                checked={formData.role === 'company'}
                onChange={handleChange}
              />
              Company
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <div className="auth-links">
          <p>
            Don't have an account?{' '}
            <Link to={`/register?role=${formData.role}`}>Register here</Link>
          </p>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

  