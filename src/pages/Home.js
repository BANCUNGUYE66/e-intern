import { Link } from 'react-router-dom';
import './Home.css';
import heroImage from './Assets/hero-graphic-269dd9ecd7eff5363b73e1a63e9c4e00.png';
import ash from './Assets/ash.jpeg';
import david from './Assets/david.jpeg';
import elijah from './Assets/elijah.jpeg';
import aimable from './Assets/aimable.jpeg';
import derick from './Assets/derick.jpeg';
import kevin from './Assets/kevin.jpeg';


const Home = () => {
  // Define team members data
  const teamMembers = [
    {
      name: "David Katate",
      role: "Team Lead",
      image: david,// Replace with actual video links when available
    },
    {
      name: "Manzi Kevin",
      role: "Tech. support",
      image: kevin,
    },
    {
      name: "Aimable Bancunguye",
      role: "web Developer",
      image: ash,
    },
    {
      name: "Aimable Manishimwe",
      role: "Operations",
      image: aimable,
    },
    {
      name: "Shyaka Derrick",
      role: "Marketing Specialist",
      image: derick,
    },
    {
      name: "Elijah KABATSI",
      role: "Scribe",
      image: elijah,
    }
  ];

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to <span className="highlight">e-Intern</span></h1>
          <p className="subtitle">Connecting Graduates with SMEs for Meaningful Internships</p>
          <div className="cta-buttons">
            <Link to="/register?role=graduate" className="cta-button graduate">
              Register as Graduate
            </Link>
            <Link to="/register?role=company" className="cta-button company">
              Register as Company
            </Link>
          </div>
        </div>
        <div className="hero-image">
           <img src={heroImage} alt="Students and companies connecting" />
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">How It Works</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🎓</div>
            <h3>For Graduates</h3>
            <ul>
              <li>Create your professional profile</li>
              <li>Get matched with relevant opportunities</li>
              <li>Track your applications</li>
              <li>Gain valuable work experience</li>
            </ul>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏢</div>
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
        <h2 className="section-title">Why Choose e-Intern?</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">🔍</div>
            <h3>Smart Matching</h3>
            <p>Advanced algorithms to match the right talent with the right opportunity</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">💼</div>
            <h3>Focus on SMEs</h3>
            <p>Specialized platform for small and medium enterprises</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">📈</div>
            <h3>Skill Development</h3>
            <p>Track progress and develop professional skills</p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2 className="section-title">Meet Our Team</h2>
        <p className="team-intro">The passionate people behind e-Intern</p>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <div className="member-image-container">
                <img src={member.image} alt={member.name} className="member-image" />
              </div>
              <h3 className="member-name">
                   {member.name.split(" ").map((part, index) => (
                   <div key={index}>{part}</div>
                     ))}
             </h3>
              <p className="member-role">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="get-started">
        <h2>Ready to Get Started?</h2>
        <p>Join our platform today and take the first step towards a successful career or finding your next star employee.</p>
        <div className="cta-buttons">
          <Link to="/register?role=graduate" className="cta-button graduate">
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;