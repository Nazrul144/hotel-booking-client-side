import React from 'react';

const SortReview = ({ sortedReview }) => {
   const {comment, rating} = sortedReview || {}
 
    return (
        <div>
            <div>
                <div className="card  bg-sky-400 shadow-xl">
                    <figure className="px-10 pt-10">
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{rating}</h2>
                        <p>User feedback: {comment}</p>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SortReview;