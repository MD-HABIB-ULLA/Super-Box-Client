import { Link } from "react-router-dom";


const Banner2 = () => {
    return (
        <div className="min-h-[70vh] bg-base-200">
            <div className="ml-[10%] pt-[8%] ">
                {/* <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
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