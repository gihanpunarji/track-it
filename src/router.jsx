import { createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
import AddProduct from "./pages/AddProduct";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";


const router = createBrowserRouter([
    {
        path: "/",
        element: <SignIn />

    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/addproduct",
        element: <AddProduct />
    },
    {
        path: "/viewinventory",
        element: <Inventory />


    }
])

export default router