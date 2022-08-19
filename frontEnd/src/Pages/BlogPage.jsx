
import './BlogPage.css'
import React, { Fragment, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogDetails } from '../Actions/blogActions';
import Loader from '../Components/Layout/loader';
import CommentBox from '../Components/Common/commentBox';
import { getReviews } from '../Actions/reviewActions';
import Review from '../Components/Common/Review';
import { useNavigate } from 'react-router-dom';
import {createReview} from '../Actions/reviewActions';
import Chip from '../Components/Common/chip';

const Blog = (props) => {
  const navigate = useNavigate();
  const [comment, setComment] = React.useState('');
  const [rating, setRating] = React.useState(0);

  const { user } = useSelector(state => state.auth);
  const { reviews } = useSelector(state => state.fetchReview);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogDetails(id))
    dispatch(getReviews(id))
  }, [dispatch, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(comment,rating);
    dispatch(createReview(id,user._id,comment,rating));
    setComment('');
    setRating(0);
    navigate('/');
}



  const { loading, blog } = useSelector(state => state.blogDetails);

  return (
    <Fragment>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {loading ? <Loader /> : (
        <div className='blog-wrap'>
          <header>
            <h1 className='text-5xl capitalize'>{blog.title}</h1>
            <h3 className='my-4 ml-2 text-xl text-blue-600'>By :
              <span className='text-2xl ml-4 capitalize'>
                {blog.Author}
              </span>
            </h3>
          </header>
          <img src={blog.cover} alt='cover' />
          <p className='blog-desc leading-9'>{blog.content}</p>
          <div className='mt-5 blog-review'>
            {reviews.map((review, i) => (
              <div key={i}>
                <Review Comment={review.Comment} Rating={review.Rating} user={review.User} />
              </div>
            ))}
          </div>
          {user.name ?
            <CommentBox blogId={id} user={user} handleSubmit = {handleSubmit} setComment={setComment} setRating = {setRating} comment = {comment} rating = {rating} />
            : null
          }
        </div>
      )}
    </Fragment>
  );
};

export default Blog;