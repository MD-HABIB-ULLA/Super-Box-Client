import Title from "../../../Components/Title";
import Banner2 from "../Components2/Banner2";
import ContactUs2 from "../Components2/ContactUs2";
import FollowUs2 from "../Components2/FollowUs2";
import Footer2 from "../Components2/Footer2";
import PopularProducts from "../Components2/PopularProducts";
import ReviewCarousel from "../Components2/ReviewCarousel";


const LandingPage2 = () => {
    return (
        <div>
            <Banner2></Banner2>
            <PopularProducts></PopularProducts>
            <div className="my-20">
                <Title title1={'what we are?'} title2={'about us'}></Title>

                <div className='container mx-auto flex flex-row gap-20 py-10 px-10'>
                    <div className=' flex-1 py-5'>
                        <h1 className='text-2xl font-semibold'>We are the connector,</h1>
                        <p className='font-light '>the bridge that needs to be established to extend our culture to the world. By acting as the link between diverse communities, we facilitate the sharing and appreciation of our unique heritage on a global scale. Our role is to ensure that the richness of our traditions, values, and customs is experienced and understood by people everywhere, fostering mutual respect and understanding. Through our efforts, we aim to create a global tapestry where every culture is valued and celebrated.</p>
                    </div>
                    <div className=' flex-1 bg-gray-300 rounded-r-3xl'></div>
                </div>
            </div>
            <ReviewCarousel></ReviewCarousel>

            <Footer2></Footer2>
        </div>
    );
};

export default LandingPage2;