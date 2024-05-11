
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import image1 from '../../assets/banner/image1.jpg'
import image2 from '../../assets/banner/image2.jpg'
import image3 from '../../assets/banner/image3.jpg'
import image4 from '../../assets/banner/image4.jpg'

import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="mt-44 lg:mt-10">

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
                    style={{ height: '1000px' }} // Set height here
                >
                    <SwiperSlide> <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                        <img src={image1} alt="" className="w-full h-auto rounded-lg" />
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  lg:text-3xl font-bold"><div className="w-96 h-56  bg-[#f5d0fe] rounded-xl duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"><p className="p-6 ml-4">
                            Tremendous hotel! <br /> <small className="text-red-500 ">To know more details</small> <br /> <Link to='/contact'><button className="btn btn-primary mt-3 text-xl font-bold">Contact us</button></Link>
                        </p></div></h1>

                    </div></SwiperSlide>
                    <SwiperSlide> <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                        <img src={image2} alt="" className="w-full h-auto rounded-lg" />
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  lg:text-3xl font-bold"><div className="w-96 h-56  bg-[#f5d0fe] rounded-xl duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"><p className="p-6 ml-4">
                            Beautiful hotel and eco-friendly! <br /> <small className="text-red-500 ">To know more details</small> <br /> <Link to='/contact'><button className="btn btn-primary mt-3 text-xl font-bold">Contact us</button></Link>
                        </p></div></h1>

                    </div></SwiperSlide>
                    <SwiperSlide> <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                        <img src={image3} alt="" className="w-full h-auto rounded-lg" />
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  lg:text-3xl font-bold"><div className="w-96 h-56  bg-[#f5d0fe] rounded-xl duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"><p className="p-6 ml-4">
                            Where Beauty Meets Eco-Consciousness! <br /> <small className="text-red-500 ">To know more details</small> <br /> <Link to='/contact'><button className="btn btn-primary mt-3 text-xl font-bold">Contact us</button></Link>
                        </p></div></h1>

                    </div></SwiperSlide>
                    <SwiperSlide> <div className="flex justify-center items-center bg-no-repeat bg-cover relative">
                        <img src={image4} alt="" className="w-full h-auto rounded-lg" />
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  lg:text-3xl font-bold"><div className="w-96 h-56  bg-[#f5d0fe] rounded-xl duration-1000 ease-in-out hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"><p className="p-6 ml-4">
                            Luxurious Eco-Residence hotel <br /> <small className="text-red-500 ">To know more details</small> <br /> <Link to='/contact'><button className="btn btn-primary mt-3 text-xl font-bold">Contact us</button></Link>
                        </p></div></h1>

                    </div></SwiperSlide>

                </Swiper>

            </div>
        </div>
    );
};

export default Banner;