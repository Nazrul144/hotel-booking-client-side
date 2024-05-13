import React from 'react';
import PropTypes from 'prop-types'; // ES6
import { Helmet } from 'react-helmet-async';
import 'animate.css';
import { Link } from 'react-router-dom';

const FeaturedRoomCard = ({featuredRoom}) => {
    const {image, description, _id} = featuredRoom || {};
    return (
        <div>
             <Helmet>
                <title>Modern-Hotel | Home</title>
            </Helmet>
            <div className="card h-full shadow-xl animate__animated animate__zoomIn animate__slow bg-base-100">

                
                <figure className="px-10 pt-10">
                    <img src={image}  alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{description.substring(0,20)}....</h2>
                   
                    <div className="card-actions">
                        <Link to={`/room/${_id}`} className="btn btn-primary hover:btn-secondary">Book Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

FeaturedRoomCard.propTypes = {
    featuredRoom:PropTypes.node
};

export default FeaturedRoomCard;