import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InternshipList.css';

const InternshipList = ({ internships = [] }) => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    type: '',
    location: '',
    industry: ''
  });

  const filteredInternships = internships.filter(internship => {
    return Object.entries(filters).every(([key, value]) => {
      return !value || internship[key].toLowerCase().includes(value.toLowerCase());
    });
  });

  const handleApply = (internship) => {
    navigate('/internships/apply', { state: { internship } });
  };

  return (
    <div className="internship-list">
      <div className="filters">
        <input
          type="text"
          placeholder="Filter by type..."
          value={filters.type}
          onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
        />
        <input
          type="text"
          placeholder="Filter by location..."
          value={filters.location}
          onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
        />
        <input
          type="text"
          placeholder="Filter by industry..."
          value={filters.industry}
          onChange={(e) => setFilters(prev => ({ ...prev, industry: e.target.value }))}
        />
      </div>

      <div className="internship-grid">
        {filteredInternships.map(internship => (
          <div key={internship.id} className="internship-card">
            <div className="internship-header">
              <h3>{internship.title}</h3>
              <span className="company">{internship.companyName}</span>
            </div>
            
            <div className="internship-details">
              <p>{internship.description}</p>
              
              <div className="tags">
                <span className="tag">{internship.type}</span>
                <span className="tag">{internship.location}</span>
                <span className="tag">${internship.stipend}/month</span>
              </div>
              
              <div className="skills">
                <strong>Required Skills:</strong>
                <p>{internship.skills}</p>
              </div>
              
              <div className="meta">
                <span>Duration: {internship.duration} months</span>
                <span>Positions: {internship.positions}</span>
                <span>Deadline: {new Date(internship.deadline).toLocaleDateString()}</span>
              </div>
            </div>
            
            <button 
              className="apply-btn"
              onClick={() => handleApply(internship)}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternshipList; 