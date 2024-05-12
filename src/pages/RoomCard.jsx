import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // ES6
import { Link } from 'react-router-dom';
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
            <Link to={`/room/${_id}`} className=" dark:bg-gray-50 dark:text-gray-800 relative">
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
    );
};
RoomCard.propTypes = {
    room: PropTypes.node
};
export default RoomCard;