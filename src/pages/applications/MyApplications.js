import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import ApplicationList from '../../components/applications/ApplicationList';
import './MyApplications.css';

const MyApplications = () => {
  const { currentUser } = useAuth();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Mock data for now
    const mockApplications = [
      {
        id: 1,
        internshipTitle: "Software Development Intern",
        companyName: "Tech Corp",
        status: "pending",
        appliedAt: "2024-01-15T10:00:00Z",
      },
      {
        id: 2,
        internshipTitle: "Frontend Developer Intern",
        companyName: "Web Solutions Inc",
        status: "interview",
        appliedAt: "2024-01-10T09:30:00Z",
        interviewDate: "2024-01-20T14:00:00Z",
      },
      {
        id: 3,
        internshipTitle: "Full Stack Developer Intern",
        companyName: "Digital Systems",
        status: "rejected",
        appliedAt: "2024-01-05T11:20:00Z",
        updatedAt: "2024-01-12T15:45:00Z",
        feedback: "We're looking for candidates with more experience in backend development."
      }
    ];

    setTimeout(() => {
      setApplications(mockApplications);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div className="loading">Loading your applications...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="my-applications-page">
      <header className="page-header">
        <h1>My Applications</h1>
        <p>Track and manage your internship applications</p>
      </header>

      <div className="stats">
        <div className="stat-item">
          <span className="stat-label">Total Applications</span>
          <span className="stat-value">{applications.length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Pending</span>
          <span className="stat-value">
            {applications.filter(app => app.status === 'pending').length}
          </span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Interviews</span>
          <span className="stat-value">
            {applications.filter(app => app.status === 'interview').length}
          </span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Accepted</span>
          <span className="stat-value">
            {applications.filter(app => app.status === 'accepted').length}
          </span>
        </div>
      </div>

      <ApplicationList applications={applications} />
    </div>
  );
};

export default MyApplications; 