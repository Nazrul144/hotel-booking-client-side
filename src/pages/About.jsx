import { Fade } from "react-awesome-reveal";
import 'animate.css';
const About = () => {
    return (
        <div>

            <div className='ml-8 mr-8'>
                <div className='mt-10'>
                    <Fade cascade>
                        <h3 className='text-xl text-center mb-4 font-bold text-sky-400 mt-8 animate__animated animate__fadeInRight animate__animated animate__backInDown'>About <span className="text-purple-400 font-bold">ElysianStays</span></h3>
                        <div className="bg-pink-500 text-white p-8 rounded-lg">
                            <p className='animate__animated animate__fadeInLeftBig text-justify'>
                                Welcome to ElysianStays, where we believe in the timeless elegance of luxury living. Founded with a vision to redefine sophistication in travel accommodations, ElysianStays is dedicated to curating exquisite stays that elevate your travel experiences to new heights of opulence. Whether you're seeking a lavish getaway or a cozy retreat, our carefully curated selection of accommodations promises unparalleled comfort and indulgence. Explore our collection and embark on a journey of refined hospitality with ElysianStays
                            </p>
                        </div>
                    </Fade>

                    <Fade cascade>
                        <h3 className='text-xl font-bold text-sky-400 mt-8 animate__animated animate__fadeInUp text-center mb-4'>Our Story</h3>
                        <div className="bg-pink-500 text-white p-8 rounded-lg">
                            <p className='animate__animated animate__fadeInRight'>
                                Established in 2016, ElysianStays has been a beacon of luxury hospitality solutions for discerning travelers, vacation planners, and adventurers alike. Our journey began with a passion for exceptional experiences and an unwavering commitment to quality service. Over the years, we've cultivated enduring relationships with hoteliers and hosts from around the world, allowing us to bring you the finest selection of accommodations, amenities, and experiences.
                            </p>
                        </div>
                    </Fade>

                    <Fade cascade>
                        <h3 className='text-xl font-bold text-sky-400 mt-8 animate__animated animate__jackInTheBox text-center mb-4'>Our Commitment</h3>
                        <div className="bg-pink-500 text-white p-8 rounded-lg">
                            <p>
                                Quality is the cornerstone of everything we do at ElysianStays. From the accommodations we select to the service we provide, we hold ourselves to the highest standards of excellence. We take pride in offering luxury stays that not only exude beauty but also guarantee comfort and durability. Each property in our collection is meticulously curated to ensure an unforgettable experience that stands the test of time.
                            </p>
                        </div>
                    </Fade>

                    <Fade cascade>
                        <div>
                            <h3 className="text-center font-bold text-sky-400 mt-8 mb-4 text-xl">Discover Luxury, Redefine Hospitality</h3>
                            <div className="bg-pink-500 text-white p-8 rounded-lg">
                            <p className='animate__animated animate__lightSpeedInRight'>
                                Whether you're planning a luxurious getaway or seeking a cozy retreat, ElysianStays invites you to explore our curated selection of accommodations and experience the unparalleled hospitality and timeless elegance that define us.
                            </p>
                            </div>
                        </div>
                    </Fade>
                    <Fade fraction>
                        <div className="bg-purple-300 mx-auto rounded-xl mt-8 w-1/2 p-6 text-xl">
                        <small className='font-semibold animate__animated animate__flipInX mt-24'>Thank you for choosing ElysianStays as your partner in luxury hospitality.</small>
                        </div>
                    </Fade>

                </div>
            </div>
        </div>
    );
};

export default About;