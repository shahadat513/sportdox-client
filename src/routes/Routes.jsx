import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AddEquipment from "../pages/AddEquipment";
import AllEquipment from "../pages/AllEquipment";
import CardDetails from "../components/CardDetails";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import MyEquipment from "../pages/MyEquipment";
import Update from "../components/Update";
import PrivateRoutes from "../privateRoutes/PrivateRoutes";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://sportdox-server.vercel.app/products')
            },
            {
                path: "/allEquipment",
                element: <AllEquipment></AllEquipment>,
                loader: () => fetch('https://sportdox-server.vercel.app/products')

            },
            {
                path: "/addEquipment",
                element: <PrivateRoutes>
                    <AddEquipment></AddEquipment>
                </PrivateRoutes>

            },
            {
                path: "/cardDetails/:id",
                element: <PrivateRoutes>
                    <CardDetails></CardDetails>
                </PrivateRoutes>,
                loader: () => fetch('https://sportdox-server.vercel.app/products')
            },
            {
                path: "/signin",
                element: <SignIn></SignIn>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "/myEquipment",
                element: <PrivateRoutes>
                    <MyEquipment></MyEquipment>
                </PrivateRoutes>,
            },
            {
                path: "/update/:id",
                element: <PrivateRoutes>
                    <Update></Update>
                </PrivateRoutes>,
                loader: ({ params }) => fetch(`https://sportdox-server.vercel.app/${params.id}`)
            }
        ]
    },
]);


export default routes;
