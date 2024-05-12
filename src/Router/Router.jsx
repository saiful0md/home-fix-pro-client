import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import AddService from "../Pages/AddService/AddService";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../components/PopularServices/ServiceDetails";
import ProtectorRuout from "../components/ProtectorRuout";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addService',
                element: <ProtectorRuout>
                    <AddService></AddService>
                </ProtectorRuout>
            },
            {
                path:'/service/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader:({params})=> fetch(`${import.meta.env.VITE_API_URL}/service/${params.id}`)
            }
        ]
    }
])

export default Router;