import Title from "../../Components/Title";

const AllProduct = () => {

    return (
        <div className="mt-10 px-3">
            <Title title1={''} title2={'All products'}></Title>
            {/* Search Bar */}

            <label className="input input-bordered input-info flex max-w-xs ml-auto mt-10 items-center gap-2">
                <input type="text" className="grow" placeholder="Search here..." />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                </svg>
            </label>


            <div className="overflow-x-auto mt-5">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Product No.</th>
                            <th>Product Name</th>
                            <th>Shop</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Electronics</td>
                            <td>350</td>
                            <td>26</td>
                            <td><button className="btn btn-outline btn-error  btn-xs ">Remove</button></td>
                        </tr>
                        {/* row 1 */}
                        <tr>
                            <th>2</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Electronics</td>
                            <td>350</td>
                            <td>26</td>
                            <td><button className="btn btn-outline btn-error  btn-xs ">Remove</button></td>
                        </tr>
                        {/* row 1 */}
                        <tr>
                            <th>3</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Electronics</td>
                            <td>350</td>
                            <td>26</td>
                            <td><button className="btn btn-outline btn-error  btn-xs ">Remove</button></td>
                        </tr>
                        {/* row 1 */}
                        <tr>
                            <th>4</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Electronics</td>
                            <td>350</td>
                            <td>26</td>
                            <td><button className="btn btn-outline btn-error  btn-xs ">Remove</button></td>
                        </tr>
                        {/* row 1 */}
                        <tr>
                            <th>5</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Electronics</td>
                            <td>350</td>
                            <td>26</td>
                            <td><button className="btn btn-outline btn-error  btn-xs ">Remove</button></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllProduct;