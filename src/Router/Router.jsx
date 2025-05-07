import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Home from "../pages/Home";
import EventDetails from "../Components/EventDetails";
import Login from "../Components/Login";
import Register from "../Components/Register";
import PrivateRoute from "../Components/PrivateRoute";
import Error from "../pages/Error";
import Profile from "../pages/Profile";


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
                element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>
            },
            {
                path: "/login",
                Component:Login,
            },
            {
                path: "/register",
                Component: Register,
            },
            {
                path: "/profile",
                Component: Profile,
            }
        ]
    },
    {
        path: '/about',
    },
    {
        path: "/*",
        Component: Error,
    }
])