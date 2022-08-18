
import './BlogPage.css'
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { getBlogDetails } from '../Actions/blogActions';
import Loader from '../Components/Layout/loader';
import CommentBox from '../Components/Common/commentBox';
import {getReviews} from '../Actions/reviewActions';
import Review from '../Components/Common/Review';

const Blog = (props) => {

    console.log("Caleed blog page");
    const {user} = useSelector(state => state.auth);
    const {reviews} = useSelector(state => state.fetchReview);
    console.log(reviews);

    const {id} = useParams();
    // console.log(id);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBlogDetails(id))
        dispatch(getReviews(id))
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
        <img src= {blog.cover} alt='cover' />
          <p className='blog-desc'>{blog.content}</p>
          <div className='blog-review'>
              <h3>Reviews</h3>
              {reviews.map((review, i) => (
                <div key={i}>
                  <Review Comment={review.Comment} Rating={review.Rating} />
                </div>
              ))}
          </div>
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