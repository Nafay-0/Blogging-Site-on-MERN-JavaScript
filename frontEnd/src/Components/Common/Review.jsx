import React from 'react';

const Review = ({Comment,Rating}) => {
    return (
        <div>
            {/* display comment and rating */}
            <div className="flex justify-between">
                <div className="flex items-center">
                    <p>
                        {Comment}
                    </p>
                    <div className="flex items-center">
                        <p>
                            {Rating}
                        </p>
                    </div>
                </div>
        </div>
            
        </div>
    );
}

export default Review;
