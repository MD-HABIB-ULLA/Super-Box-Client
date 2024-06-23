import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import LandingPage from "../Pages/LandingPage";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";


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
            }
        ]
    }
])

export default mainRouter;