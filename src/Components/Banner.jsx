

const Banner = () => {
    return (
        <div className="hero min-h-[70vh] bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                {/* <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
                <div className="max-w-[70%] mr-auto">
                    <h1 className="text-5xl font-bold">Super Box</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className=" border-2 py-2 px-5 rounded-3xl text-lg font-semibold bg-blue-600 text-white hover:bg-blue-700">Create Now!</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;