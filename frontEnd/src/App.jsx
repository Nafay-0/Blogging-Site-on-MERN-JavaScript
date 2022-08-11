
import './App.css';
import React from 'react';
import BlogPage from './Pages/BlogPage';
import HomePage from './Pages/HomePage';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import LoginPage from './Pages/LoginPage';
import { blogList } from './blogData';

function App() {

  let FirstBlog = blogList[0];
  console.log(FirstBlog);
  return (
    
    <div>
      <Navbar/>
      {/* <HomePage /> */}
      {/* <BlogPage blog={blogList[4]} /> */}
      <LoginPage />
      <Footer />
    </div>
  );
}

export default App;
