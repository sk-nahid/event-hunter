import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Home from "../pages/Home";
import EventDetails from "../Components/EventDetails";


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
                path: "/event-details",
                Component: EventDetails,
            }
        ]
    },
    {
        path: '/about',
    }
])