import React from 'react';
import PropTypes from 'prop-types'; // ES6
import { Helmet } from 'react-helmet-async';

const FeaturedRoomCard = ({featuredRoom}) => {
    const {image, description} = featuredRoom;
    return (
        <div>
             <Helmet>
                <title>Modern-Hotel | Home</title>
            </Helmet>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image}  alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{description}</h2>
                   
                    <div className="card-actions">
                        <button className="btn btn-primary">Book Now</button>
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