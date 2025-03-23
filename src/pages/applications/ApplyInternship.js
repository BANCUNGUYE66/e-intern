import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ApplicationForm from '../../components/applications/ApplicationForm';
import './ApplyInternship.css';

const ApplyInternship = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const internship = location.state?.internship;

  if (!internship) {
    return navigate('/internships/browse');
  }

  const handleSubmit = async (applicationData) => {
    try {
      // Mock submission for now
      console.log('Application submitted:', applicationData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      navigate('/dashboard', { 
        state: { message: 'Application submitted successfully!' }
      });
    } catch (error) {
      throw new Error('Failed to submit application');
    }
  };

  return (
    <ApplicationForm 
      internship={internship}
      onSubmit={handleSubmit}
      onCancel={() => navigate('/internships/browse')}
    />
  );
};

export default ApplyInternship; 