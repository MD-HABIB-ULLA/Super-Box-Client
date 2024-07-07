import { FaArrowRight } from "react-icons/fa";
import ProductCard from "../Components2/ProductCard";


const AllProducts2 = () => {
    return (
        <div className="mt-10">
        
            <div className="grid grid-cols-3 gap-10 px-20 my-10">
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </div>
            <div className="flex justify-center items-center mb-10">
                <button className="btn btn-outline text-xl btn-info">Show All <span><FaArrowRight /></span></button>
            </div>
           
        </div>
    );
};

export default AllProducts2;