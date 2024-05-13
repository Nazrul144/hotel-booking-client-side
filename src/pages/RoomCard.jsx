import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // ES6
import { Link } from 'react-router-dom';
import 'animate.css';
const RoomCard = ({ room }) => {
    const { image, pricePerNight, title, specialOffers, _id } = room || {};

    const [reviews, setReviews] = useState([])
    
    useEffect(() => {
        // Fetch reviews for the specific house
        fetch(`${import.meta.env.VITE_API_URL}/reviews/${room._id}`)
          .then(res => res.json())
          .then(data => {
            setReviews(data);
          })
          .catch(error => {
            console.error("Error fetching reviews:", error);
          });
      }, [room._id]); 

    return (
        <div>
           <div className=' animate__animated animate__zoomInRightbg-sky-500 duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-4 rounded-xl animate__zoomIn'>
           <Link to={`/room/${_id}`} className=" dark:bg-gray-50 dark:text-gray-800 relative ">
                {/* Image Container */}
                <div className="relative">
                    <img src={image} alt="room_image" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                   
                </div>
                {/* Room Details */}
                <div className="mt-4 space-y-2">
                
                    <a rel="noopener noreferrer" href="#" className="block">
                        <h3 className="text-xl font-semibold dark:text-violet-600">{title}</h3>
                    </a>
                    <li className="leading-snug dark:text-gray-600">
                        <span className='font-semibold'>Price per Night:</span> ${pricePerNight}
                    </li>
                    <li className="leading-snug dark:text-gray-600">
                        <span className='font-semibold'>Special Offers:</span> {specialOffers}
                    </li>
                </div>
            </Link>
           </div>
        </div>
    );
};
RoomCard.propTypes = {
    room: PropTypes.node
};
export default RoomCard;