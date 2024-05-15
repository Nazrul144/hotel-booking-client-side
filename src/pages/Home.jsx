import Banner from "./Home/Banner";
import FeaturedRooms from "./Home/FeaturedRooms";
import MapLocation from "./Home/MapLocation";
import NewsletterSignup from "./Home/NewsletterSignup";
import { Helmet } from 'react-helmet-async';
import Testimonial from "./Home/Testimonial";
import SortReview from "./SortReview";
import SortUserReviews from "./SortUserReviews";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Modern-Hotel | Home</title>
            </Helmet>
            <Banner></Banner>
            <FeaturedRooms></FeaturedRooms>
            <MapLocation></MapLocation>
            <Testimonial></Testimonial>
            <SortUserReviews></SortUserReviews>
            <NewsletterSignup></NewsletterSignup>
        </div>
    );
};

export default Home;