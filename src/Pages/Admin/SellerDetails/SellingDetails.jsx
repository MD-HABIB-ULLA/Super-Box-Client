import Title from "../../../Components/Title";
import BestSellingProducts from "../../Seller/Components2/BestSellingProducts";
import PopularProducts from "../../Seller/Components2/PopularProducts";
import AllProducts2 from "../../Seller/Pages/AllProducts2";


const SellingDetails = () => {
    return (
        <div className="mt-20">
            <Title title1={''} title2={`Total Products : ${250}`}></Title>
            <AllProducts2></AllProducts2>
            <PopularProducts></PopularProducts>
            <BestSellingProducts></BestSellingProducts>
        </div>
    );
};

export default SellingDetails;