import { createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
<<<<<<< HEAD
import Home from "./components/Home";
=======
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
>>>>>>> 570c155 (Add product design)

const router = createBrowserRouter([
    {
        path: "/",
        element: <SignIn />

    },
    {
        path: "/home",
        element: <Home />
<<<<<<< HEAD
=======

    },
    {
        path: "/addproduct",
        element: <AddProduct />
>>>>>>> 570c155 (Add product design)

    }
])

export default router