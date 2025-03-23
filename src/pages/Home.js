import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to e-Intern</h1>
        <p className="subtitle">Connecting Graduates with SMEs for Meaningful Internships</p>
        <div className="cta-buttons">
          <Link to="/register?role=graduate" className="cta-button graduate">
            Register as Graduate
          </Link>
          <Link to="/register?role=company" className="cta-button company">
            Register as Company
          </Link>
        </div>
      </section>

      <section className="features">
        <h2>How It Works</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>For Graduates</h3>
            <ul>
              <li>Create your professional profile</li>
              <li>Get matched with relevant opportunities</li>
              <li>Track your applications</li>
              <li>Gain valuable work experience</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>For Companies</h3>
            <ul>
              <li>Post internship opportunities</li>
              <li>Find talented graduates</li>
              <li>AI-powered matching</li>
              <li>Easy application management</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="benefits">
        <h2>Why Choose e-Intern?</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <h3>Smart Matching</h3>
            <p>Advanced algorithms to match the right talent with the right opportunity</p>
          </div>
          <div className="benefit-item">
            <h3>Focus on SMEs</h3>
            <p>Specialized platform for small and medium enterprises</p>
          </div>
          <div className="benefit-item">
            <h3>Skill Development</h3>
            <p>Track progress and develop professional skills</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;