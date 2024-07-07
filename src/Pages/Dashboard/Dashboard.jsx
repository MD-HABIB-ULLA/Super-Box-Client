
import { Link, NavLink, Outlet } from "react-router-dom";
import { MdAddBusiness } from "react-icons/md";
import { TbLogs } from "react-icons/tb";
import { GrAtm } from "react-icons/gr";
import { HiChatBubbleLeftRight, HiUserGroup } from "react-icons/hi2";
import { GrResources } from "react-icons/gr";
import Navbar from "../../Components/Navbar";
import { AiOutlineProduct } from "react-icons/ai";

import { FaRegQuestionCircle } from "react-icons/fa";

const Dashboard = () => {

    const sellerNavLinks = <>
        <li>
            <NavLink to="/dashboard/create-shop" className={`p-2 text-lg rounded-sm`}>
                <MdAddBusiness className="text-3xl" />
                Create a website</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/product-management" className={`p-2 text-lg rounded-sm`}>
                <AiOutlineProduct className="text-3xl" />
                Product Management</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/blogs" className={`p-2 text-lg rounded-sm`}>
                <TbLogs className="text-3xl" />
                Blogs
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/pos" className={`p-2 text-lg rounded-sm`}>
                <GrAtm className="text-3xl" />
                POS
            </NavLink>
        </li>

        <li>
            <NavLink to="/dashboard/chat-us" className={`p-2 text-lg rounded-sm`}>
                <HiChatBubbleLeftRight className="text-3xl" />
                Chat with us
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/bm-resources" className={`p-2 text-lg rounded-sm`}>
                <GrResources className="text-3xl" />
                Business and Marketing Resources
            </NavLink>
        </li>
    </>
    const adminNavLinks = <>
        <li className="menu p-0">
            <details>
                <summary className="px-3 rounded-sm"><NavLink to="/dashboard/create-shop" className={` text-lg flex flex-row justify-between items-center gap-2`}>
                    <HiUserGroup className="text-3xl" />
                    All Users</NavLink></summary>
                <ul className="text-lg">
                    <li><NavLink to={'/dashboard/seller-panel'}>Seller Panel</NavLink></li>
                    <li><NavLink to={'/dashboard/customer-panel'}>Customer Panel</NavLink></li>
                </ul>
            </details>
        </li>
        <li>
            <NavLink to="/dashboard/all-products" className={`p-2 text-lg rounded-sm`}>
                <AiOutlineProduct className="text-3xl" />
                All Products</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/blogs" className={`p-2 text-lg rounded-sm`}>
                <TbLogs className="text-3xl" />
                Selling details
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/pos" className={`p-2 text-lg rounded-sm`}>
                <GrAtm className="text-3xl" />
                Wallet
            </NavLink>
        </li>

        <li>
            <NavLink to="/dashboard/seller-request" className={`p-2 text-lg rounded-sm`}>
                <FaRegQuestionCircle className="text-3xl" />
                Seller Request
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/bm-resources" className={`p-2 text-lg rounded-sm`}>
                <GrResources className="text-3xl" />
                Reports And Issues 
            </NavLink>
        </li>

    </>
    return (
        <div className="">
            <Navbar></Navbar>
            <div className=" grid grid-cols-1 md:grid-cols-12 ">
                {/* dashboard side bar */}
                <div className="w-full md:col-span-4  lg:col-span-3 min-h-screen bg-blue-200">
                    <Link to="/dashboard/welcome-page" className="text-2xl font-semibold py-2 bg-gray-300 hover:bg-gray-500 hover:text-white flex items-center justify-center ">Dashboard</Link>
                    <div className="menu p-1 md:p-4 ">
                        {

                            <ul className="flex md:flex-col">
                                {adminNavLinks}
                            </ul>

                        }

                    </div>
                </div>
                {/* dashboard content */}
                <div className="w-full md:col-span-8 lg:col-span-9 ">

                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;