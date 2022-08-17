
import './BlogPage.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import EmptyList from '../Components/Common/emptylist';
import Chip from '../Components/Common/chip';
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { getBlogDetails } from '../Actions/blogActions';
import Loader from '../Components/Layout/loader';
import CommentBox from '../Components/Common/commentBox';


const Blog = (props) => {

    console.log("Caleed blog page");
    const {user} = useSelector(state => state.auth);

    const {id} = useParams();
    // console.log(id);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBlogDetails(id));
    } , [dispatch,id]);
    const {loading,blog} = useSelector(state => state.blogDetails);
    

  return (
    <>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {loading? <Loader /> : (
      <div className = 'blog-wrap'>
        <header>
          <h1>{blog.title}</h1>
          <div className='blog-subCategory'>
              {/* {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))} */}
              <h3 className='mt-4 ml-2 text-blue-600'>By : {blog.Author}</h3>
          </div>
        </header>
        <img src= {'/assets/images/Purple-Combination-colors-graphic-design-predictions-1024x576-1024x576.jpg'} alt='cover' />
          <p className='blog-desc'>{blog.content}</p>
          {user.name? 
            <CommentBox blogId = {id} user = {user} />
            : null
          }
      </div>
      )}
    </>
  );
};

export default Blog;