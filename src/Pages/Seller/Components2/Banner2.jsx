import { Link } from "react-router-dom";
import sellerBanner from '../../../assets/sellerBanner.jpg'

const Banner2 = () => {
    return (
        <div className="hero min-h-[70vh] bg-cover"
        style={{
            backgroundImage: "url(https://i.ibb.co/DQk816R/shopping-people-composition-with-collage-flat-cart-smartphone-credit-card-icons-with-human-character.jpg)",
          }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className=" hero-content text-neutral-content ">
                <div className="max-w-[70%] ">
                    <h1 className="text-5xl font-bold">Brand Name</h1>
                    <p className="py-6 max-w-[70%]">In the banner you can show discounts and offers, new launched products new launched products</p>
                    <button className=" border-2 py-2 px-5 rounded-3xl text-lg font-semibold bg-blue-600 text-white hover:bg-blue-700"><Link to={"/sign-up"}>Order Now!</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Banner2;