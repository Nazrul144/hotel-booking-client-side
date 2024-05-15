import React from 'react';
import { FaRegStar } from "react-icons/fa";
import 'animate.css';
const VisitorCard = ({ visitorReview }) => {
    const { image, name, rating, comments } = visitorReview || {};
    return (
        <div>
            <div className="card card-compact shadow-xl px-4  animate__animated animate__zoomIn animate__slow bg-base-100 duration-1000 ease-in-out hover:bg-orange-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 p-4 rounded-xl animate__zoomIn'">
                <div className="flex items-center justify-center" style={{ height: '200px' }}>
                    <figure style={{ borderRadius: '50%', overflow: 'hidden', width: '150px', height: '150px' }}>
                        <img src={image} alt="Visitor" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title text-sky-400">{name}</h2>
                    <div className='flex items-center gap-2'>
                        <li className='font-semibold'>Rating: <span>{rating}</span></li>
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                    </div>
                   <hr />
                    <p>{comments}</p>
                </div>
            </div>
        </div>
    );
};



export default VisitorCard;
