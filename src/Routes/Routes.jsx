import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Discover } from "../pages";
import SongDetails from "../pages/SongDetails";
import ArtistDetails from "../pages/ArtistDetails";
import ArroundYou from "../pages/ArroundYou";
import TopArtists from "../pages/TopArtists";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '',
                element: <Discover/>
            },
            {
                path: 'songs/:songid',
                element: <SongDetails/>
            },
            {
                path: 'artists/:artistId',
                element: <ArtistDetails/>
            },
            {
                path: 'around-you',
                element: <ArroundYou/>
            },
            {
                path: 'top-artists',
                element: <TopArtists/>
            },
            { 
                path: '*',
                element: <h1>Not found</h1>
            }
        ]
    },

])

export default router;