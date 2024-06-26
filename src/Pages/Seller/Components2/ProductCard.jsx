import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ProductCard = () => {
    return (
        <div className="card card-compact bg-base-100  shadow-xl">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes" />
            </figure>
            <div className="card-body flex flex-row justify-between">
                <h2 className="card-title">Shoes!</h2>

                <Link className="flex flex-row justify-center items-center gap-2 text-xl hover:text-blue-900  text-blue-600 rounded-lg hover:border-blue-900  border-2 border-blue-600 py-2 px-4">Details<span><FaArrowRight /></span></Link>

            </div>
        </div>
    );
};

export default ProductCard;