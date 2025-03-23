import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import RegistrationForm from '../components/auth/RegistrationForm';
import ProtectedRoute from '../components/auth/ProtectedRoute';
import PostInternship from '../pages/company/PostInternship';
import BrowseInternships from '../pages/internships/BrowseInternships';
import ApplyInternship from '../pages/applications/ApplyInternship';
import MyApplications from '../pages/applications/MyApplications';
import ReviewApplications from '../pages/company/ReviewApplications';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route 
        path="/internships/post" 
        element={
          <ProtectedRoute>
            <PostInternship />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/internships/browse" 
        element={
          <ProtectedRoute>
            <BrowseInternships />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/internships/apply" 
        element={
          <ProtectedRoute>
            <ApplyInternship />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/applications" 
        element={
          <ProtectedRoute>
            <MyApplications />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/applications/review" 
        element={
          <ProtectedRoute>
            <ReviewApplications />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
}

export default AppRoutes; 