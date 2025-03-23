import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Mock authentication functions
  async function registerUser(email, password, role, userData) {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser = {
        uid: 'mock-uid-' + Date.now(),
        email,
        role,
        ...userData
      };
      
      setCurrentUser(mockUser);
      return mockUser;
    } finally {
      setLoading(false);
    }
  }

  async function login(email, password, role) {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser = {
        uid: 'mock-uid-' + Date.now(),
        email,
        role,
        ...(role === 'company' ? {
          companyName: 'Mock Company',
          industry: 'Technology'
        } : {
          firstName: 'John',
          lastName: 'Doe'
        })
      };
      
      setCurrentUser(mockUser);
      return mockUser;
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    setCurrentUser(null);
  }

  const value = {
    currentUser,
    registerUser,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
} 