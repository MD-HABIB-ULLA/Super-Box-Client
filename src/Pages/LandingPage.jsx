import AboutUs from "../Components/AboutUs";
import Banner from "../Components/Banner";
import ContactUs from "../Components/ContactUs";
import FollowUs from "../Components/FollowUs";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Services from "../Components/Services";

const LandingPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services></Services>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
            <FollowUs></FollowUs>
            <Footer></Footer>
        </div>
    );
};

export default LandingPage;