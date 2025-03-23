import { useState } from 'react';
import './ApplicationList.css';

const ApplicationList = ({ applications = [] }) => {
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredApplications = applications.filter(app => 
    statusFilter === 'all' || app.status === statusFilter
  );

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return 'status-pending';
      case 'interview': return 'status-interview';
      case 'accepted': return 'status-accepted';
      case 'rejected': return 'status-rejected';
      default: return '';
    }
  };

  return (
    <div className="applications-list">
      <div className="filters">
        <button 
          className={`filter-btn ${statusFilter === 'all' ? 'active' : ''}`}
          onClick={() => setStatusFilter('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${statusFilter === 'pending' ? 'active' : ''}`}
          onClick={() => setStatusFilter('pending')}
        >
          Pending
        </button>
        <button 
          className={`filter-btn ${statusFilter === 'interview' ? 'active' : ''}`}
          onClick={() => setStatusFilter('interview')}
        >
          Interview
        </button>
        <button 
          className={`filter-btn ${statusFilter === 'accepted' ? 'active' : ''}`}
          onClick={() => setStatusFilter('accepted')}
        >
          Accepted
        </button>
        <button 
          className={`filter-btn ${statusFilter === 'rejected' ? 'active' : ''}`}
          onClick={() => setStatusFilter('rejected')}
        >
          Rejected
        </button>
      </div>

      <div className="applications-grid">
        {filteredApplications.map(application => (
          <div key={application.id} className="application-card">
            <div className="application-header">
              <h3>{application.internshipTitle}</h3>
              <span className="company">{application.companyName}</span>
              <span className={`status ${getStatusColor(application.status)}`}>
                {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
              </span>
            </div>

            <div className="application-details">
              <div className="detail-item">
                <strong>Applied:</strong>
                <span>{new Date(application.appliedAt).toLocaleDateString()}</span>
              </div>
              
              <div className="detail-item">
                <strong>Last Updated:</strong>
                <span>{new Date(application.updatedAt || application.appliedAt).toLocaleDateString()}</span>
              </div>

              {application.interviewDate && (
                <div className="detail-item">
                  <strong>Interview Date:</strong>
                  <span>{new Date(application.interviewDate).toLocaleString()}</span>
                </div>
              )}

              {application.feedback && (
                <div className="feedback">
                  <strong>Feedback:</strong>
                  <p>{application.feedback}</p>
                </div>
              )}
            </div>

            <div className="application-actions">
              <button className="btn-secondary">View Details</button>
              {application.status === 'interview' && (
                <button className="btn-primary">Prepare for Interview</button>
              )}
            </div>
          </div>
        ))}

        {filteredApplications.length === 0 && (
          <div className="no-applications">
            <p>No applications found for the selected filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationList; 