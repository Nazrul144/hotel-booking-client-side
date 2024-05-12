import React, { useState } from 'react';
import PropTypes from 'prop-types'; // ES6
import { Link } from 'react-router-dom';
const RoomCard = ({room}) => {
    const {image, pricePerNight, title, specialOffers, _id } = room || {};
    
    //Filtering:
   
    return (
        <div>
            <Link to={`/room/${_id}`} className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
                <div className="flex justify-between pb-4 border-bottom">
                    
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={image} alt="room_image" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        <div className="flex items-center text-xs">
                          
                        </div>
                    </div>
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-xl font-semibold dark:text-violet-600">{title}</h3>
                        </a>
                        <li className="leading-snug dark:text-gray-600"> <span className=' font-semibold '>Price per Night:</span> ${pricePerNight}</li>
                        <li className="leading-snug dark:text-gray-600"> <span className=' font-semibold '>Special Offers:</span> {specialOffers} </li>
                    </div>
                </div>
            </Link>
        </div>
    );
};
RoomCard.propTypes = {
    room:PropTypes.node
};
export default RoomCard;