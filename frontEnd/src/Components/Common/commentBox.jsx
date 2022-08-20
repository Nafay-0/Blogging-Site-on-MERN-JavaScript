import React from 'react';
import ReactStars from "react-rating-stars-component";
import {useDispatch} from 'react-redux';



const CommentBox = ({blogId,user,setComment,setRating,comment,rating,handleSubmit}) => {
    

    

    

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
