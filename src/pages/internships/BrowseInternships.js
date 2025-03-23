import { useState, useEffect } from 'react';
import InternshipList from '../../components/internships/InternshipList';
import './BrowseInternships.css';

const BrowseInternships = () => {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Mock data for now
    const mockInternships = [
      {
        id: 1,
        title: "Software Development Intern",
        companyName: "Tech Corp",
        description: "Join our dynamic team to work on cutting-edge projects...",
        type: "Full-time",
        location: "New York, NY",
        stipend: "1500",
        skills: "JavaScript, React, Node.js",
        duration: "6",
        positions: "2",
        deadline: "2024-03-01",
        industry: "Technology"
      },
      {
        id: 2,
        title: "Marketing Intern",
        companyName: "Global Marketing Inc",
        description: "Help shape digital marketing strategies...",
        type: "Part-time",
        location: "Remote",
        stipend: "1000",
        skills: "Social Media, Content Creation, Analytics",
        duration: "3",
        positions: "3",
        deadline: "2024-02-28",
        industry: "Marketing"
      }
    ];

    setTimeout(() => {
      setInternships(mockInternships);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div className="loading">Loading internships...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="browse-internships-page">
      <header className="page-header">
        <h1>Available Internships</h1>
        <p>Find the perfect internship opportunity</p>
      </header>
      
      <InternshipList internships={internships} />
    </div>
  );
};

export default BrowseInternships; 