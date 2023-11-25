import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Discover } from "../pages";
import SongDetails from "../pages/SongDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Discover/>
            },
            {
                path: '/songs/:songid',
                element: <SongDetails/>
            },
            { 
                path: '*',
                element: <h1>Not found</h1>
            }
        ]
    },

])

export default router;