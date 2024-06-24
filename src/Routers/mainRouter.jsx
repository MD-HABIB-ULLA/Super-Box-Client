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
import Orders from "../Pages/Dashboard/Orders";
import Pos from "../Pages/Dashboard/Pos";
import WelcomePage from "../Pages/Dashboard/WelcomePage";


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
                element:<Dashboard></Dashboard>,
                children:[
                    {
                        path:'welcome-page',
                        element: <WelcomePage></WelcomePage>
                    },
                    {
                        path:'add-product',
                        element: <AddProduct></AddProduct>
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
                        path:'orders',
                        element: <Orders></Orders>
                    },
                    {
                        path:'pos',
                        element: <Pos></Pos>
                    }
                ]
            }
        ]
    }
])

export default mainRouter;