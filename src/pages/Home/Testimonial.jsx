import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';


const Testimonial = () => {


    const [rooms, setRooms] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/rooms`)
            .then(res => res.json())
            .then(data => {
                setRooms(data);
            });
    }, []);

    console.log(rooms);
    return (
        <div className='w-full h-[800px] bg-[#FFEDD5]'>
            <div className='bg-[#334155] w-9/12 mx-auto rounded-lg p-16 mt-16'>
                <h1 className='text-[#FFCF00] text-center'>Testimonial</h1>
                <p className='text-center text-white'>
                    Discover what our guests have to say about their unforgettable experiences at Hotel Booking. Experience luxury, comfort, and impeccable service firsthand!</p>
            </div>
            <div className='container px-16 py-10 mx-auto'>
            <Swiper
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  slidesPerView={'auto'}
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }}
  pagination={true}
  modules={[EffectCoverflow, Autoplay, Pagination]}
  className="mySwiper"
  style={{ width: '500px', height: '450px' }}
>
  {rooms.map(room => (
   <SwiperSlide key={room._id}>
   <div style={{ position: 'relative' }}>
     <img src={room.image} />
     <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'yellow', fontSize: '24px', fontWeight: 'bold' }}>
       <div style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0))', padding: '8px 16px', borderRadius: '8px' }}>
         Special Offer: {room.specialOffers}
       </div>
     </div>
     <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)' }}></div>
   </div>
 </SwiperSlide>
 
  ))}
</Swiper>

            </div>
        </div>
    );
};

export default Testimonial;