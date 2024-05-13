import { useEffect, useState } from 'react';
import FeaturedRoomCard from './FeaturedRoomCard';
import { Typewriter } from 'react-simple-typewriter'
const FeaturedRooms = () => {



    const [featuredRooms, setFeaturedRooms] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/rooms`)
            .then(res => res.json())
            .then(data => {
                setFeaturedRooms(data)
            })
    }, [])

    console.log(featuredRooms);

    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }

    return (
        <div className=' text-center'>
        
        <div className='mx-auto'>
            <h1 style={{ paddingTop: '5rem', margin: 'auto', fontWeight: 'normal', fontSize: '2.5rem' }}>
                <span style={{ color: 'red', fontWeight: 'bold' }}>
                    <Typewriter
                        words={['Featured Rooms']}
                        loop={5}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        onLoopDone={handleDone}
                    />
                </span>
            </h1>
        </div>

        <div className='w-1/2 mx-auto'>
            <p className='mt-4'>Our featured rooms offer luxury, comfort, and convenience, ensuring an unforgettable stay with modern amenities and tasteful decor.</p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
            {
                featuredRooms.slice(0, 6).map(featuredRoom => <FeaturedRoomCard key={featuredRoom._id} featuredRoom={featuredRoom}></FeaturedRoomCard>)
            }
        </div>
    </div>
    );
};

export default FeaturedRooms;