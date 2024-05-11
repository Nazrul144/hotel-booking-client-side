import Banner from "./Home/Banner";
import FeaturedRooms from "./Home/FeaturedRooms";
import MapLocation from "./Home/MapLocation";
import NewsletterSignup from "./Home/NewsletterSignup";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Modern-Hotel | Home</title>
            </Helmet>
            <Banner></Banner>
            <MapLocation></MapLocation>
            <NewsletterSignup></NewsletterSignup>
            <FeaturedRooms></FeaturedRooms>
        </div>
    );
};

export default Home;