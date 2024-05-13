import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import AddService from "../Pages/AddService/AddService";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ManageServices from "../Pages/ManageServices/ManageServices";
import Register from "../Pages/Register/Register";
import ServiceToDo from "../Pages/ServiceToDo/ServiceToDo";
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
                path: '/service/:id',
                element: <ProtectorRuout>
                    <ServiceDetails></ServiceDetails>
                </ProtectorRuout>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/service/${params.id}`)
            },
            {
                path: '/serviceToDo',
                element: <ProtectorRuout>
                    <ServiceToDo></ServiceToDo>
                </ProtectorRuout>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/serviceToDo`)
            },
            {
                path: '/manageService',
                element: <ProtectorRuout>
                    <ManageServices></ManageServices>
                </ProtectorRuout>,
            },
            // {
            //     path: '/bookedServices/:email',
            //     element: <ProtectorRuout>
            //         <BookedService></BookedService>
            //     </ProtectorRuout>,
            //     loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/bookedServices/${params.email}`)
            // }
        ]
    }
])

export default Router;