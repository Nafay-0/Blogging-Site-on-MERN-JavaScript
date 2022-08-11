
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

function App() {

  let FirstBlog = blogList[0];
  console.log(FirstBlog);
  return (
    
    <div>
      <Navbar/>
      <HomePage />
      {/* <BlogPage blog={blogList[4]} /> */}
      {/* <LoginPage /> */}
      {/* <SignUpPage /> */}
      {/* <ProfilePage /> */}
      <Footer />
    </div>
  );
}

export default App;
