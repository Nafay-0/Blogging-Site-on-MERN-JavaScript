import React from 'react';
import StarRatings from 'react-star-ratings';

const Review = ({ Comment, Rating, user }) => {
    return (
        <div className="block  relative top-1/3">
            <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border  rounded-lg bg-white shadow-lg">
                <div className="relative flex gap-4">
                        <div className="flex flex-col w-full">
                            <div className="flex flex-row justify-between">
                                <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">USER</p>
                                <StarRatings
                                rating={Rating} starRatedColor="orange" numberOfStars={5} 
                                name='rating'isSelectable = {false}
                                starDimension="20px" starSpacing='2px'/>
                                <a className="text-gray-500 text-xl" href="#"><i className="fa-solid fa-trash"></i></a>
                            </div>
                            <p className="text-gray-400 text-sm">20 April 2022, at 14:88 PM</p>
                        </div>
                </div>
                <p className="-mt-4 text-gray-500">{Comment}.</p>
            </div>
        </div>
    );
}

export default Review;
