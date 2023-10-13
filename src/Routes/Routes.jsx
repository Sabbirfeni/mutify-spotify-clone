import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Discover } from "../pages";

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
                path: '*',
                element: <h1>Not found</h1>
            }
        ]
    },

])

export default router;