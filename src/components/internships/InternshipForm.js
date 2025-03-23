import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import './InternshipForm.css';

const InternshipForm = ({ onSubmit, onCancel }) => {
  const { currentUser } = useAuth();
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    requirements: '',
    duration: '3',
    type: 'full-time',
    location: '',
    stipend: '',
    skills: '',
    deadline: '',
    positions: '1'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      companyId: currentUser.uid,
      companyName: currentUser.companyName,
      industry: currentUser.industry,
      status: 'active',
      createdAt: new Date().toISOString()
    });
  };

  return (
    <div className="internship-form">
      <h2>Post New Internship</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Internship Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="e.g., Software Development Intern"
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Describe the internship role and responsibilities"
          />
        </div>

        <div className="form-group">
          <label>Requirements</label>
          <textarea
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            required
            rows="3"
            placeholder="List the required qualifications and skills"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Duration (months)</label>
            <input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
              min="1"
              max="12"
            />
          </div>

          <div className="form-group">
            <label>Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="City, Country or Remote"
            />
          </div>

          <div className="form-group">
            <label>Monthly Stipend (USD)</label>
            <input
              type="number"
              name="stipend"
              value={formData.stipend}
              onChange={handleChange}
              required
              min="0"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Required Skills</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
            placeholder="e.g., JavaScript, React, Node.js"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Application Deadline</label>
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          <div className="form-group">
            <label>Number of Positions</label>
            <input
              type="number"
              name="positions"
              value={formData.positions}
              onChange={handleChange}
              required
              min="1"
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="button" onClick={onCancel} className="btn-secondary">
            Cancel
          </button>
          <button type="submit" className="btn-primary">
            Post Internship
          </button>
        </div>
      </form>
    </div>
  );
};

export default InternshipForm; 