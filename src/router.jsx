import { createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";

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

    }
])

export default router