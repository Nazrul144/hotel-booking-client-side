import React, { useEffect, useState } from 'react';
import VisitorCard from './VisitorCard';
import Marquee from "react-fast-marquee";
const VisitorReview = () => {

    const [visitorReviews, setVisitorReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/visitors')
            .then(res => res.json())
            .then(data => {
                setVisitorReviews(data);
            })
    }, [])

    return (
        <div>
            <div className=' mt-32 lg:mt-4'>
                <Marquee className='text-4xl py-4 font-bold z-10' pauseOnHover={true} style={{ background: 'linear-gradient(to right, #ff7e5f, #feb47b)' }}>
                Such a wonderful stay at Holiday Hive World! The staff were friendly, the room was clean, and the amenities were fantastic. Highly recommend! We are thrilled to have you here!
                </Marquee>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-24 lg:mt-8 px-4'>
                {
                    visitorReviews.map(visitorReview => <VisitorCard key={visitorReview._id} visitorReview={visitorReview}></VisitorCard>)
                }
            </div>
        </div>
    );
};

export default VisitorReview;