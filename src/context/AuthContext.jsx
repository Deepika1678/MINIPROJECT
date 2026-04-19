import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Dummy users database
  const users = [
    {
      id: 1,
      name: 'Deepika Ratna',
      email: 'deepika@techlearn.com',
      password: 'deepika123',
      branch: 'CSE (AI & DS)',
      year: '3rd Year',
      college: 'JNTU Kakinada',
      avatar: 'DR',
      role: 'Student',
      joinDate: 'January 2024',
    },
  ];

  const login = (email, password) => {
    const found = users.find(
      (u) => u.email === email && u.password === password
    );
    if (found) {
      const { password: _, ...safeUser } = found;
      setUser(safeUser);
      return { success: true };
    }
    return { success: false, message: 'Invalid email or password' };
  };

  const signup = (formData) => {
    const exists = users.find((u) => u.email === formData.email);
    if (exists) return { success: false, message: 'Email already exists' };

    const newUser = {
      id: users.length + 1,
      name: formData.name,
      email: formData.email,
      branch: formData.branch,
      year: formData.year,
      college: formData.college,
      avatar: formData.name.split(' ').map((n) => n[0]).join('').toUpperCase(),
      role: 'Student',
      joinDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    };
    users.push({ ...newUser, password: formData.password });
    const { password: _, ...safeUser } = { ...newUser, password: formData.password };
    setUser(safeUser);
    return { success: true };
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);