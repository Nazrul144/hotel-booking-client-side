
import { Swiper, SwiperSlide } from 'swiper/react';

import image1 from '../../assets/banner/image1.jpg'
import image2 from '../../assets/banner/image2.jpg'
import image3 from '../../assets/banner/image3.jpg'
import image4 from '../../assets/banner/image4.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

export default function Banner() {
  return (
    <>
     <div className='container px-6 py-10 mx-auto'>
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        
      >
        <SwiperSlide >
            <Slide image={image1} text='Royal hotel for the people!' className='rounded-lg'></Slide>
        </SwiperSlide>


        <SwiperSlide>
            <Slide image={image2} text= ' Explore this hotel and enjoy your life!' className='rounded-lg'></Slide>
        </SwiperSlide>
        

        <SwiperSlide>
            <Slide image={image3} text= 'Look like a king place, Explore!' className='rounded-lg'></Slide>
        </SwiperSlide>

        <SwiperSlide>
            <Slide image={image4} text= ' Very beautiful hotel and eco-friendly!' className='rounded-lg'></Slide>
        </SwiperSlide>
       
      </Swiper>
     </div>
    </>
  );
}
