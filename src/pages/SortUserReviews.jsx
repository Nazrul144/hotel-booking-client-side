import React, { useEffect, useState } from 'react';
import SortReview from './SortReview';
import axios from 'axios';


const SortUserReviews = () => {

    const [sortedReviews, setSortedReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    //Sorting: 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/sorting`);
                setSortedReviews(response.data);
                setLoading(false);
            } catch (error) {
                console.log("Failed to fetch data", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

console.log(sortedReviews);
    return (
        <div>
            <div>
                <h1 className='text-red-500 font-bold text-2xl text-center mt-12 mb-12 px-4'>Visitors Feedback:</h1>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    sortedReviews.map(sortedReview => <SortReview key={sortedReview._id} sortedReview={sortedReview}></SortReview>)
                }

            </div>
        </div>
    );
};

export default SortUserReviews;