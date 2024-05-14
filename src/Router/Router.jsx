import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import AddService from "../Pages/AddService/AddService";
import AllServices from "../Pages/AllServices/AllServices";
import BookedService from "../Pages/BookedService/BookedService";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ManageServices from "../Pages/ManageServices/ManageServices";
import Register from "../Pages/Register/Register";
import ServiceToDo from "../Pages/ServiceToDo/ServiceToDo";
import UpdateService from "../Pages/UpdateService";
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
                path: '/services',
                element: <AllServices></AllServices>,
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
                path: '/service/:id',
                element: <ProtectorRuout>
                    <ServiceDetails></ServiceDetails>
                </ProtectorRuout>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/service/${params.id}`)
            },
            {
                path: '/updateService/:id',
                element: <ProtectorRuout>
                    <UpdateService></UpdateService>
                </ProtectorRuout>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/service/${params.id}`)
            },
            {
                path: '/serviceToDo',
                element: <ProtectorRuout>
                    <ServiceToDo></ServiceToDo>
                </ProtectorRuout>,
            },
            {
                path: '/manageService',
                element: <ProtectorRuout>
                    <ManageServices></ManageServices>
                </ProtectorRuout>,
            },
            {
                path: '/bookedServices',
                element: <ProtectorRuout>
                    <BookedService></BookedService>
                </ProtectorRuout>,
            }
        ]
    }
])

export default Router;