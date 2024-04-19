import React from 'react'
import "./App.css"
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./page/Home.tsx";
import Howto from "./page/Howto.tsx";
import Contact from "./page/Contact.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/howto",
        element: <Howto/>,
    },
    {
        path: "/contact",
        element: <Contact/>,
        errorElement:"asf"
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
            <RouterProvider router={router}/>
    </React.StrictMode>,
)
