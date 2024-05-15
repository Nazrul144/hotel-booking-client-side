import moment from 'moment';
import React from 'react';

const ReviewCard = ({data}) => {
    const time = moment(data?.time, "YYYYMMDD").fromNow();

    return (
        <div>
              <div className="block rounded-lg bg-neutral-700 shadow-black/30">
                <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
                <div className="mx-auto -mt-12 w-80 overflow-hidden  rounded-lg bg-neutral-800">
                  <img src={data?.image} />
                </div>
                <div className="p-6">
                  <h4 className="mb-4 text-2xl text-center font-semibold"><span className='text-sky-400'>Special Offer:</span>{data?.specialOffers} </h4>
                    <div className='flex justify-between items-center'>
                        <p> <span className='text-sky-400 font-semibold'>Room Name:</span> {data?.title}</p>
                        <p><span className='text-sky-400 font-semibold'>Price: </span>{data?.pricePerNight} $</p>

                    </div>
                  <hr />
                  <p className="mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="inline-block h-7 w-7 pr-2"
                      viewBox="0 0 24 24"
                    >
                    </svg>
                    
                  </p>
                </div>
              </div>
            </div>
    );
};

export default ReviewCard;