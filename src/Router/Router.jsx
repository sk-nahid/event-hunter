import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Home from "../pages/Home";
import EventDetails from "../Components/EventDetails";
import Login from "../Components/Login";
import Register from "../Components/Register";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/event-details/:id",
                Component: EventDetails,
            },
            {
                path: "/login",
                Component:Login,
            },
            {
                path: "/register",
                Component: Register,
            }
        ]
    },
    {
        path: '/about',
    }
])