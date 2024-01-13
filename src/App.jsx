import {Route, BrowserRouter as Router, Routes, Outlet, RouterProvider, createBrowserRouter} from "react-router-dom";
import Index from "./pages/Index.jsx";
import ErrorPage from "./errorpage.jsx";


function Shell() {
    return (
        <div>
            <h1>Dashboard</h1>

            <Outlet />
        </div>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Shell />,
        errorElement: <ErrorPage />,
        children: [
            {
                path:"home",
                element: <Index/>
            },
            {
                path:"mental-health-booking",
                element: <Index/>
            }
        ]


    },
]);

function App() {
    console.log("hello from App");
    return (
       <RouterProvider router={router}/>
    );
}

export default App;
