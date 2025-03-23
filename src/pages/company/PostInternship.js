import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InternshipForm from '../../components/internships/InternshipForm';
import './PostInternship.css';

const PostInternship = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (internshipData) => {
    try {
      setLoading(true);
      setError('');
      
      // For now, we'll just mock the submission
      console.log('Internship Data:', internshipData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      navigate('/dashboard');
    } catch (error) {
      setError('Failed to post internship: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="post-internship-page">
      {error && <div className="error-message">{error}</div>}
      {loading && <div className="loading-message">Posting internship...</div>}
      
      <InternshipForm 
        onSubmit={handleSubmit}
        onCancel={() => navigate('/dashboard')}
      />
    </div>
  );
};

export default PostInternship; 