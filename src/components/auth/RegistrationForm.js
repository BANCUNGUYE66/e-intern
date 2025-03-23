import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role') || 'graduate';
  const navigate = useNavigate();
  const { registerUser } = useAuth();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Separate state for role-specific fields
  const [graduateFields, setGraduateFields] = useState({
    firstName: '',
    lastName: '',
    university: '',
    fieldOfStudy: '',
    graduationYear: '',
    skills: '',
    experience: ''
  });

  const [companyFields, setCompanyFields] = useState({
    companyName: '',
    industry: '',
    size: '',
    location: '',
    description: '',
    website: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Reset form when role changes
  useEffect(() => {
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
    });
    setError('');
  }, [role]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (role === 'graduate' && name in graduateFields) {
      setGraduateFields(prev => ({
        ...prev,
        [name]: value
      }));
    } else if (role === 'company' && name in companyFields) {
      setCompanyFields(prev => ({
        ...prev,
        [name]: value
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      
      const userData = {
        ...formData,
        role,
        ...(role === 'graduate' ? graduateFields : companyFields)
      };
      delete userData.confirmPassword;

      await registerUser(formData.email, formData.password, role, userData);
      navigate('/dashboard');
    } catch (error) {
      setError('Failed to create an account: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="registration-container">
      <h2>Register as {role === 'graduate' ? 'Graduate' : 'Company'}</h2>
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        {/* Common Fields */}
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

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        {/* Graduate-specific fields */}
        {role === 'graduate' && (
          <>
            <div className="form-section">
              <h3>Personal Information</h3>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={graduateFields.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={graduateFields.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-section">
              <h3>Educational Background</h3>
              <div className="form-group">
                <label>University</label>
                <input
                  type="text"
                  name="university"
                  value={graduateFields.university}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Field of Study</label>
                <input
                  type="text"
                  name="fieldOfStudy"
                  value={graduateFields.fieldOfStudy}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Graduation Year</label>
                <input
                  type="number"
                  name="graduationYear"
                  value={graduateFields.graduationYear}
                  onChange={handleChange}
                  min="2020"
                  max="2030"
                  required
                />
              </div>
            </div>

            <div className="form-section">
              <h3>Skills & Experience</h3>
              <div className="form-group">
                <label>Skills</label>
                <textarea
                  name="skills"
                  value={graduateFields.skills}
                  onChange={handleChange}
                  placeholder="List your key skills..."
                  rows="3"
                />
              </div>

              <div className="form-group">
                <label>Experience</label>
                <textarea
                  name="experience"
                  value={graduateFields.experience}
                  onChange={handleChange}
                  placeholder="Brief description of any relevant experience..."
                  rows="3"
                />
              </div>
            </div>
          </>
        )}

        {/* Company-specific fields */}
        {role === 'company' && (
          <>
            <div className="form-section">
              <h3>Company Information</h3>
              <div className="form-group">
                <label>Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={companyFields.companyName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Industry</label>
                <select
                  name="industry"
                  value={companyFields.industry}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Industry</option>
                  <option value="technology">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Company Size</label>
                <select
                  name="size"
                  value={companyFields.size}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="500+">500+ employees</option>
                </select>
              </div>

              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={companyFields.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Company Website</label>
                <input
                  type="url"
                  name="website"
                  value={companyFields.website}
                  onChange={handleChange}
                  placeholder="https://..."
                />
              </div>

              <div className="form-group">
                <label>Company Description</label>
                <textarea
                  name="description"
                  value={companyFields.description}
                  onChange={handleChange}
                  placeholder="Brief description of your company..."
                  rows="3"
                  required
                />
              </div>
            </div>
          </>
        )}

        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm; 