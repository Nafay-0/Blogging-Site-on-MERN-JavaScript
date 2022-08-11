
import './App.css';
import React from 'react';
import BlogPage from './Pages/BlogPage';
import HomePage from './Pages/HomePage';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
