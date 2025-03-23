import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import './ApplicationForm.css';

const ApplicationForm = ({ internship, onSubmit, onCancel }) => {
  const { currentUser } = useAuth();
  
  const [formData, setFormData] = useState({
    coverLetter: '',
    availability: '',
    startDate: '',
    relevantProjects: '',
    questions: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
      setLoading(true);
      setError('');

      const applicationData = {
        ...formData,
        internshipId: internship.id,
        internshipTitle: internship.title,
        companyId: internship.companyId,
        companyName: internship.companyName,
        applicantId: currentUser.uid,
        applicantName: `${currentUser.firstName} ${currentUser.lastName}`,
        applicantEmail: currentUser.email,
        status: 'pending',
        appliedAt: new Date().toISOString()
      };

      await onSubmit(applicationData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="application-form">
      <h2>Apply for {internship.title}</h2>
      <h3>{internship.companyName}</h3>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Cover Letter</label>
          <textarea
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            required
            rows="6"
            placeholder="Explain why you're interested in this internship and what makes you a good fit..."
          />
        </div>

        <div className="form-group">
          <label>Availability</label>
          <select
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            required
          >
            <option value="">Select availability</option>
            <option value="immediate">Immediate</option>
            <option value="2-weeks">2 weeks</option>
            <option value="1-month">1 month</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>

        <div className="form-group">
          <label>Preferred Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div className="form-group">
          <label>Relevant Projects/Experience</label>
          <textarea
            name="relevantProjects"
            value={formData.relevantProjects}
            onChange={handleChange}
            rows="4"
            placeholder="Describe any relevant projects or experience..."
          />
        </div>

        <div className="form-group">
          <label>Questions for the Company</label>
          <textarea
            name="questions"
            value={formData.questions}
            onChange={handleChange}
            rows="3"
            placeholder="Any questions you have about the internship or company..."
          />
        </div>

        <div className="form-actions">
          <button 
            type="button" 
            onClick={onCancel}
            className="btn-secondary"
            disabled={loading}
          >
            Cancel
          </button>
          <button 
            type="submit"
            className="btn-primary"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit Application'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm; 