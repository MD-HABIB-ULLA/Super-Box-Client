import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import LandingPage from "../Pages/LandingPage";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddProduct from "../Pages/Dashboard/AddProduct";
import Blogs from "../Pages/Dashboard/Blogs";
import BMresources from "../Pages/Dashboard/BMresources";
import ChatWithUs from "../Pages/Dashboard/ChatWithUs";
import CreateShop from "../Pages/Dashboard/CreateShop";
import Pos from "../Pages/Dashboard/Pos";
import WelcomePage from "../Pages/Dashboard/WelcomePage";
import PrivateRoute from "./PrivateRoute";
import MyWebsite from "../Pages/Seller/MyWebsite";
import AboutUs2 from "../Pages/Seller/Pages/AboutUs2";
import AllProducts2 from "../Pages/Seller/Pages/AllProducts2";
import Blogs2 from "../Pages/Seller/Pages/Blogs2";
import Issues2 from "../Pages/Seller/Pages/Issues2";
import Orders2 from "../Pages/Seller/Pages/Orders2";
import Reviews2 from "../Pages/Seller/Pages/Reviews2";
import LandingPage2 from "../Pages/Seller/Pages/LandingPage2";
import EditWebsite from "../Pages/Seller/Pages/EditWebsite";
import ProductManagement from "../Pages/Dashboard/ProductManagement";
import UpdateProduct from "../Pages/Dashboard/UpdateProduct";
import SellerPanel from "../Pages/Admin/SellerPanel";
import CustomerPanel from "../Pages/Admin/CustomerPanel";
import AllProduct from "../Pages/Admin/AllProduct";
import SellerRequests from "../Pages/Admin/SellerRequests";


const mainRouter = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element: <LandingPage></LandingPage>
            },
            {
                path:'login',
                element: <Login></Login>
            },
            {
                path:'sign-up',
                element: <SignUp></SignUp>
            },
            {
                path:'dashboard',
                element: <PrivateRoute>
                    <Dashboard></Dashboard>
                </PrivateRoute> ,
                children:[
                    {
                        path:'welcome-page',
                        element: <WelcomePage></WelcomePage>
                    },
                    
                    {
                        path:'blogs',
                        element: <Blogs></Blogs>
                    },
                    {
                        path:'bm-resources',
                        element: <BMresources></BMresources>
                    },
                    {
                        path:'chat-us',
                        element: <ChatWithUs></ChatWithUs>
                    },
                    {
                        path:'create-shop',
                        element: <CreateShop></CreateShop>
                    },
                    {
                        path:'pos',
                        element: <Pos></Pos>
                    },
                    {
                        path:'product-management',
                        element: <ProductManagement></ProductManagement>
                    },
                    {
                        path:'update-product',
                        element: <UpdateProduct></UpdateProduct>
                    },
                    {
                        path:'add-product',
                        element: <AddProduct></AddProduct>
                    },
                    // Admin Routes
                    {
                        path:'seller-panel',
                        element: <SellerPanel></SellerPanel>
                    },
                    {
                        path:'customer-panel',
                        element: <CustomerPanel></CustomerPanel>
                    },
                    {
                        path:'all-products',
                        element: <AllProduct></AllProduct>
                    },
                    {
                        path:'seller-request',
                        element: <SellerRequests></SellerRequests>
                    },
                ]
            }
        ]
    },
    {
        path:'/my-website',
        element: <MyWebsite></MyWebsite>,
        children:[
            {
                path:'/my-website',
                element: <LandingPage2></LandingPage2>
            },
            {
                path:'about-us2',
                element: <AboutUs2></AboutUs2>
            },
            {
                path:'all-products2',
                element: <AllProducts2></AllProducts2>
            },
            {
                path:'blogs2',
                element: <Blogs2></Blogs2>
            },
            {
                path:'issues2',
                element: <Issues2></Issues2>
            },
            {
                path:'orders2',
                element: <Orders2></Orders2>
            },
            {
                path:'reviews2',
                element: <Reviews2></Reviews2>
            },
            {
                path:'edit-website',
                element: <EditWebsite></EditWebsite>
            },
        ]
    },
])

export default mainRouter;