import React from 'react';
import ReactStars from "react-rating-stars-component";
import {useDispatch,useSelector} from 'react-redux';
import {createReview,getReviews} from '../../Actions/reviewActions';
import {useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';

const CommentBox = ({blogId,user}) => {
    const navigate = useNavigate();
    const dispatcher = useDispatch();
    const [comment, setComment] = React.useState('');
    const [rating, setRating] = React.useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(comment);
        // console.log(blogId);
        // console.log(rating);
        // console.log(user._id);
        dispatcher(createReview(blogId,user._id,comment,rating));
        setComment('');
        setRating(0);
        navigate('/');
    }

    const ratingchange = (newRating) => {
        setRating(newRating);
    }
    return (
        <div>
            <div className="max-w-lg shadow-md">
                <form onSubmit={handleSubmit} className="w-full p-4">
                    <div className="mb-2">
                        <label htmlFor="comment" className="text-lg text-gray-600">Add a comment</label>
                        <textarea className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                            id="comment" rows="3" onChange={(e) => setComment(e.target.value)}></textarea>
                    </div>
                    {/* rating input */}
                    <ReactStars
                    count={5}
                    onChange={ratingchange}
                    size={24}
                    emptyIcon={<i className="far fa-star"></i>}
                    // halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                />

                    <button className="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded">Comment</button>
                </form>
            </div>
        </div>
    );

}
export default CommentBox;
