import { Link } from "react-router-dom";
import Title from "../../Components/Title";


const SellerPanel = () => {
    return (
        <div className="mt-10">
            <Title title1={''} title2={'Seller Panel'}></Title>
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
                <table className="table table-xs ">
                    <thead>
                        <tr>
                            
                            <th>Seller ID</th>
                            <th>Name</th>
                            <th>Brand Name</th>
                            <th>location</th>
                            <th>Contact Info</th>
                            <th>Status</th>
                            <th>Total Product</th>
                            <th>Last Login</th>
                          
                            <th>Details</th>  
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Littel, Schaden and Vandervort</td>
                            <td>Canada</td>
                            <td>Blue</td>
                            <td>Active</td>
                            <td>12/16/2020</td>
                            
                            <td><Link className="text-blue-600 text-base underline">Show</Link>
                            </td>

                            <td className=" flex flex-row items-center justify-center p-1 gap-1">
                                <button className="btn btn-outline btn-info  btn-xs ">Remove</button>
                                <button className="btn btn-outline btn-error  btn-xs ">Ban</button>
                                <button className="btn btn-outline btn-warning btn-xs " >Suspend</button>
                            </td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Zemlak, Daniel and Leannon</td>
                            <td>United States</td>
                            <td>12/5/2020</td>
                            <td>Purple</td>
                            <td>Active</td>
                            <td><Link className="text-blue-600 text-base underline">Show</Link>
                            </td>

                            <td className=" flex flex-row items-center justify-center p-1 gap-1">
                                <button className="btn btn-outline btn-info  btn-xs ">Remove</button>
                                <button className="btn btn-outline btn-error  btn-xs ">Ban</button>
                                <button className="btn btn-outline btn-warning btn-xs " >Suspend</button>
                            </td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Carroll Group</td>
                            <td>China</td>
                            <td>8/15/2020</td>
                            <td>Red</td>
                            <td>Active</td>
                            <td><Link className="text-blue-600 text-base underline">Show</Link>
                            </td>

                            <td className=" flex flex-row items-center justify-center p-1 gap-1">
                                <button className="btn btn-outline btn-info  btn-xs ">Remove</button>
                                <button className="btn btn-outline btn-error  btn-xs ">Ban</button>
                                <button className="btn btn-outline btn-warning btn-xs " >Suspend</button>
                            </td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>Marjy Ferencz</td>
                            <td>Office Assistant I</td>
                            <td>Rowe-Schoen</td>
                            <td>Russia</td>
                            <td>3/25/2021</td>
                            <td>Crimson</td>
                            <td>Active</td>
                            <td><Link className="text-blue-600 text-base underline">Show</Link>
                            </td>

                            <td className=" flex flex-row items-center justify-center p-1 gap-1">
                                <button className="btn btn-outline btn-info  btn-xs ">Remove</button>
                                <button className="btn btn-outline btn-error  btn-xs ">Ban</button>
                                <button className="btn btn-outline btn-warning btn-xs " >Suspend</button>
                            </td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td>Yancy Tear</td>
                            <td>Community Outreach Specialist</td>
                            <td>Wyman-Ledner</td>
                            <td>Brazil</td>
                            <td>5/22/2020</td>
                            <td>Indigo</td>
                            <td>Active</td>
                            <td><Link className="text-blue-600 text-base underline">Show</Link>
                            </td>

                            <td className=" flex flex-row items-center justify-center p-1 gap-1">
                                <button className="btn btn-outline btn-info  btn-xs ">Remove</button>
                                <button className="btn btn-outline btn-error  btn-xs ">Ban</button>
                                <button className="btn btn-outline btn-warning btn-xs " >Suspend</button>
                            </td>
                        </tr>
                        <tr>
                            <th>6</th>
                            <td>Irma Vasilik</td>
                            <td>Editor</td>
                            <td>Wiza, Bins and Emard</td>
                            <td>Venezuela</td>
                            <td>12/8/2020</td>
                            <td>Purple</td>
                            <td>Active</td>
                            <td><Link className="text-blue-600 text-base underline">Show</Link>
                            </td>

                            <td className=" flex flex-row items-center justify-center p-1 gap-1">
                                <button className="btn btn-outline btn-info  btn-xs ">Remove</button>
                                <button className="btn btn-outline btn-error  btn-xs ">Ban</button>
                                <button className="btn btn-outline btn-warning btn-xs " >Suspend</button>
                            </td>
                        </tr>
                        <tr>
                            <th>7</th>
                            <td>Meghann Durtnal</td>
                            <td>Staff Accountant IV</td>
                            <td>Schuster-Schimmel</td>
                            <td>Philippines</td>
                            <td>2/17/2021</td>
                            <td>Yellow</td>
                            <td>Active</td>
                            <td><Link className="text-blue-600 text-base underline">Show</Link>
                            </td>

                            <td className=" flex flex-row items-center justify-center p-1 gap-1">
                                <button className="btn btn-outline btn-info  btn-xs ">Remove</button>
                                <button className="btn btn-outline btn-error  btn-xs ">Ban</button>
                                <button className="btn btn-outline btn-warning btn-xs " >Suspend</button>
                            </td>
                        </tr>
                        <tr>
                            <th>8</th>
                            <td>Sammy Seston</td>
                            <td>Accountant I</td>
                            <td>O'Hara, Welch and Keebler</td>
                            <td>Indonesia</td>
                            <td>5/23/2020</td>
                            <td>Crimson</td>
                            <td>Active</td>
                            <td><Link className="text-blue-600 text-base underline">Show</Link>
                            </td>

                            <td className=" flex flex-row items-center justify-center p-1 gap-1">
                                <button className="btn btn-outline btn-info  btn-xs ">Remove</button>
                                <button className="btn btn-outline btn-error  btn-xs ">Ban</button>
                                <button className="btn btn-outline btn-warning btn-xs " >Suspend</button>
                            </td>
                        </tr>
                        <tr>
                            <th>9</th>
                            <td>Lesya Tinham</td>
                            <td>Safety Technician IV</td>
                            <td>Turner-Kuhlman</td>
                            <td>Philippines</td>
                            <td>2/21/2021</td>
                            <td>Maroon</td>
                            <td>Active</td>
                            <td><Link className="text-blue-600 text-base underline">Show</Link>
                            </td>

                            <td className=" flex flex-row items-center justify-center p-1 gap-1">
                                <button className="btn btn-outline btn-info  btn-xs ">Remove</button>
                                <button className="btn btn-outline btn-error  btn-xs ">Ban</button>
                                <button className="btn btn-outline btn-warning btn-xs " >Suspend</button>
                            </td>
                        </tr>
                        <tr>
                            <th>10</th>
                            <td>Zaneta Tewkesbury</td>
                            <td>VP Marketing</td>
                            <td>Sauer LLC</td>
                            <td>Chad</td>
                            
                            <td>Green</td>
                            <td>6/23/2020</td>
                            <td>Active</td>
                            <td><Link className="text-blue-600 text-base underline">Show</Link>
                            </td>

                            <td className=" flex flex-row items-center justify-center p-1 gap-1">
                                <button className="btn btn-outline btn-info  btn-xs ">Remove</button>
                                <button className="btn btn-outline btn-error  btn-xs ">Ban</button>
                                <button className="btn btn-outline btn-warning btn-xs " >Suspend</button>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default SellerPanel;