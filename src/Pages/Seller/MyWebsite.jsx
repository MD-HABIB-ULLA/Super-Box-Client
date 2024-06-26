import { Outlet } from "react-router-dom";
import Navbar2 from "./Components2/Navbar2";

const MyWebsite = () => {
    return (
        <div>
            <Navbar2></Navbar2>
            <Outlet></Outlet>
        </div>
    );
};

export default MyWebsite;