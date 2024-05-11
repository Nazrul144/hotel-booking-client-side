import  { useEffect, useState } from 'react';
import FeaturedRoomCard from './FeaturedRoomCard';

const FeaturedRooms = () => {

    const [featuredRooms, setFeaturedRooms] = useState([])
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/featuredRoom`)
        .then(res => res.json())
        .then(data => {
            setFeaturedRooms(data)
        })
    },[])

    console.log(featuredRooms);
    return (
        <div className='mt-16'>
            <h1 className='font-bold text-center font-manrope text-3xl'>Featured Rooms</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                {
                    featuredRooms.map(featuredRoom => <FeaturedRoomCard key={featuredRoom._id} featuredRoom={featuredRoom}></FeaturedRoomCard>)
                }
            </div>

        </div>
    );
};

export default FeaturedRooms;