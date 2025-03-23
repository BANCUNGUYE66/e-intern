import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import './ReviewApplications.css';

const ReviewApplications = () => {
  const { currentUser } = useAuth();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('pending');

  useEffect(() => {
    // Mock data for now
    const mockApplications = [
      {
        id: 1,
        internshipTitle: "Software Development Intern",
        applicantName: "John Doe",
        applicantEmail: "john@example.com",
        status: "pending",
        appliedAt: "2024-01-15T10:00:00Z",
        coverLetter: "I am excited to apply for this position...",
        availability: "immediate",
        startDate: "2024-02-01",
        relevantProjects: "Built a full-stack web application...",
        questions: "What tech stack does the team use?"
      },
      // ... more mock applications
    ];

    setTimeout(() => {
      setApplications(mockApplications);
      setLoading(false);
    }, 1000);
  }, []);

  const handleStatusChange = async (applicationId, newStatus) => {
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setApplications(prev => prev.map(app => 
        app.id === applicationId ? { ...app, status: newStatus } : app
      ));
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const handleFeedback = async (applicationId, feedback) => {
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setApplications(prev => prev.map(app => 
        app.id === applicationId ? { ...app, feedback } : app
      ));
    } catch (error) {
      console.error('Failed to add feedback:', error);
    }
  };

  const filteredApplications = applications.filter(app => 
    selectedStatus === 'all' || app.status === selectedStatus
  );

  if (loading) return <div className="loading">Loading applications...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="review-applications-page">
      <header className="page-header">
        <h1>Review Applications</h1>
        <p>Manage and respond to internship applications</p>
      </header>

      <div className="status-tabs">
        <button 
          className={selectedStatus === 'all' ? 'active' : ''}
          onClick={() => setSelectedStatus('all')}
        >
          All
        </button>
        <button 
          className={selectedStatus === 'pending' ? 'active' : ''}
          onClick={() => setSelectedStatus('pending')}
        >
          Pending
        </button>
        <button 
          className={selectedStatus === 'interview' ? 'active' : ''}
          onClick={() => setSelectedStatus('interview')}
        >
          Interview
        </button>
        <button 
          className={selectedStatus === 'accepted' ? 'active' : ''}
          onClick={() => setSelectedStatus('accepted')}
        >
          Accepted
        </button>
        <button 
          className={selectedStatus === 'rejected' ? 'active' : ''}
          onClick={() => setSelectedStatus('rejected')}
        >
          Rejected
        </button>
      </div>

      <div className="applications-grid">
        {filteredApplications.map(application => (
          <div key={application.id} className="application-review-card">
            <div className="applicant-info">
              <h3>{application.applicantName}</h3>
              <p>{application.applicantEmail}</p>
              <p className="position">Applied for: {application.internshipTitle}</p>
            </div>

            <div className="application-content">
              <div className="section">
                <h4>Cover Letter</h4>
                <p>{application.coverLetter}</p>
              </div>

              <div className="section">
                <h4>Availability</h4>
                <p>Can start: {application.availability}</p>
                <p>Preferred start date: {new Date(application.startDate).toLocaleDateString()}</p>
              </div>

              <div className="section">
                <h4>Projects & Experience</h4>
                <p>{application.relevantProjects}</p>
              </div>

              {application.questions && (
                <div className="section">
                  <h4>Questions</h4>
                  <p>{application.questions}</p>
                </div>
              )}
            </div>

            <div className="actions">
              <select 
                value={application.status}
                onChange={(e) => handleStatusChange(application.id, e.target.value)}
              >
                <option value="pending">Pending</option>
                <option value="interview">Schedule Interview</option>
                <option value="accepted">Accept</option>
                <option value="rejected">Reject</option>
              </select>

              <textarea
                placeholder="Add feedback or notes..."
                value={application.feedback || ''}
                onChange={(e) => handleFeedback(application.id, e.target.value)}
              />

              <button className="btn-primary">Send Response</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewApplications; 