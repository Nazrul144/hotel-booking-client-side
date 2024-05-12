import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const RoomDetails = () => {
    const [startDate, setStartDate] = useState(new Date());
    const room = useLoaderData();
    const { image, pricePerNight, title, specialOffers, _id, roomSize, availability } = room || {};
    const { user, loading } = useContext(AuthContext)
    console.log(pricePerNight);

    // Function to handle booking
    const handleBookNow = async () => {
      const roomId = _id;
    //   const title = title;
      const date = startDate;
      const email = user?.email;
      const status = "available";
    //   console.log(roomId, title, date, email, status);


      const bookData = {
        roomId, title, date, email, status
      }
//  console.table(bookData);
      try {
        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/bookData`, bookData)
        console.log(data);
      }catch(error){
        console.log(error);
      }

    };

    console.log(user?.email);
    return (
        <div>
            <h1>This is room details page</h1>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-4xl text-purple-400">{title}</h1>
                        <li className="mt-4 text-lg font-bold"> <span className="text-sky-400">Price Per Night:</span> {pricePerNight}</li>
                        <li className="mt-4 text-lg font-bold"> <span className="text-sky-400">Room Size:</span> {roomSize}</li>
                        <li className="mt-4 text-lg font-bold"> <span className="text-sky-400">Availability:</span> {availability}</li>
                        <li className="mt-4 text-lg font-bold"> <span className="text-sky-400" >Special Offer:</span> {specialOffers}</li>
                        <div className='flex flex-col gap-1 '>
                            <li className='text-gray-700 text-lg font-bold'>Deadline</li>

                            <DatePicker className="border p-2 rounded-lg" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div className=" mt-4 flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link to='/myBooking' onClick={handleBookNow} rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50 hover:bg-[tomato] duration-1000 ease-in-out hover:text-black border-none">Book Now</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RoomDetails;