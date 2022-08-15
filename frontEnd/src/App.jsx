
import './App.css';
import React from 'react';
import BlogPage from './Pages/BlogPage';
import HomePage from './Pages/HomePage';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import { blogList } from './blogData';
import ProfilePage from './Pages/ProfilePage';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
    
    <Router>
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/login" element={<LoginPage hist/>} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
