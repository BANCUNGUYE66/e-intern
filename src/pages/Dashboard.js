import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const isCompany = currentUser?.role === 'company';

  const handlePostInternship = () => {
    navigate('/internships/post');
  };

  const handleViewInternships = () => {
    navigate('/internships/browse');
  };

  const handleViewApplications = () => {
    // Different routes for company and graduate
    if (isCompany) {
      navigate('/applications/review');
    } else {
      navigate('/applications');
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to your Dashboard</h1>
        <p>
          {isCompany ? currentUser?.companyName : `${currentUser?.firstName} ${currentUser?.lastName}`}
          <span className="email">({currentUser?.email})</span>
        </p>
      </header>

      <div className="dashboard-content">
        {isCompany ? (
          // Company Dashboard
          <>
            <div className="dashboard-card">
              <h3>Company Profile</h3>
              <p>Manage your company information and preferences</p>
              <button>Edit Profile</button>
            </div>

            <div className="dashboard-card">
              <h3>Internship Postings</h3>
              <p>Create and manage internship opportunities</p>
              <button onClick={handlePostInternship}>Post New Internship</button>
            </div>

            <div className="dashboard-card">
              <h3>Applications</h3>
              <p>Review and manage internship applications</p>
              <button onClick={handleViewApplications}>View Applications</button>
            </div>

            <div className="dashboard-card">
              <h3>Candidate Matches</h3>
              <p>View candidates that match your requirements</p>
              <button>View Matches</button>
            </div>
          </>
        ) : (
          // Graduate Dashboard
          <>
            <div className="dashboard-card">
              <h3>Your Profile</h3>
              <p>Complete your profile to get better matches</p>
              <button>Edit Profile</button>
            </div>

            <div className="dashboard-card">
              <h3>Available Internships</h3>
              <p>Find and apply for internships</p>
              <button onClick={handleViewInternships}>Browse Internships</button>
            </div>

            <div className="dashboard-card">
              <h3>Applications</h3>
              <p>Track your internship applications</p>
              <div className="status-summary">
                <span className="status-item">Pending: 0</span>
                <span className="status-item">Interviews: 0</span>
                <span className="status-item">Accepted: 0</span>
              </div>
              <button onClick={handleViewApplications}>View Applications</button>
            </div>

            <div className="dashboard-card">
              <h3>Skills Development</h3>
              <p>Track your progress and learn new skills</p>
              <button>View Skills</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

