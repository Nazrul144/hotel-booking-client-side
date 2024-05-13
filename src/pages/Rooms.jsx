import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import RoomCard from './RoomCard';
const Rooms = () => {

    const [rooms, setRooms] = useState([])
    const [filter, setFilter] =  useState('')
    
    
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/rooms?filter=${filter}`)
        .then(res => res.json())
        .then(data => {
            setRooms(data);
        });
    }, [filter]);

   
    return (
        <div>
             <Helmet>
                <title>Modern-Hotel | Rooms</title>
            </Helmet>
            <div className='justify-center items-center flex mt-4'>
            <select className='px-2 py-1 ml-2 border-[1px] border-amber-400 rounded-lg' 
            name="pricePerNight"
            id="pricePerNight"
            onChange={e=> setFilter(e.target.value)}
            value={filter}
            >
                <option value="">Filter by Price</option>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="400">400</option>
            </select>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                {
                    rooms.map(room => <RoomCard key={room._id} room={room}></RoomCard>)
                }
            </div>
        </div>
    );
};

export default Rooms;