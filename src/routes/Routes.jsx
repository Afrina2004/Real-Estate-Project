import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UserProfile from '../pages/UserProfile/UserProfile'
import EstateDetails from '../pages/EstateDetails/EstateDetails.jsx';
import ContactUs from '../pages/ContactUs/ContactUs';
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        errorElement: <ErrorPage> </ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>, 
               
            }, 
            {
                path:'/estate/:id',
                element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
                loader: async () =>{
                 const response = await fetch('../card.json');
                 return response.json();
               }
               },
               
            {
                path: '/login',
                element: <Login></Login>
            }, 
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/contact',
                element:<PrivateRoute> <ContactUs></ContactUs></PrivateRoute>
            }, 
            {
               
                path: '/user-profile',
                element: <PrivateRoute><UserProfile /></PrivateRoute>,
            },
        ]
    }    
]);

export default router;