import React from 'react'
import "./index.css"
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page.tsx"
import Home from "./page/Home.tsx";
import HomeMenu1 from "./page/HomeMenu1.tsx";
import HomeMenu2 from "./page/HomeMenu2.tsx";
import HomeMenu3 from "./page/HomeMenu3.tsx";
import HomeMenu4 from "./page/HomeMenu4.tsx";
import HomeMenu5 from "./page/HomeMenu5.tsx";
import HomeMenu6 from "./page/HomeMenu6.tsx";
import HomeMenu7 from "./page/HomeMenu7.tsx";

const router = createBrowserRouter([
    {
        errorElement: <ErrorPage />
    },
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/home/menu/1",
        element: <HomeMenu1 />
    },
    {
        path: "/home/menu/2",
        element: <HomeMenu2 />
    },
    {
        path: "/home/menu/3",
        element: <HomeMenu3 />
    },
    {
        path: "/home/menu/4",
        element: <HomeMenu4 />
    },
    {
        path: "/home/menu/5",
        element: <HomeMenu5 />
    },
    {
        path: "/home/menu/6",
        element: <HomeMenu6 />
    },
    {
        path: "/home/menu/7",
        element: <HomeMenu7 />
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
