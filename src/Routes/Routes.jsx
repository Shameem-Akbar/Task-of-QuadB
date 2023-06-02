import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Booking from "../Pages/Booking/Booking";
import ShowDetails from "../Pages/ShowDetails/ShowDetails";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/show/:id',
                element: <ShowDetails></ShowDetails>
            },
            {
                path: '/booking',
                element: <Booking></Booking>
            }
        ]
    },
]);