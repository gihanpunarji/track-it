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
<<<<<<< HEAD

=======
>>>>>>> adc709225a1fdb9046338b762285f682152ec63e
    },
    {
        path: "/addproduct",
        element: <AddProduct />
<<<<<<< HEAD
=======

>>>>>>> adc709225a1fdb9046338b762285f682152ec63e

    }
])

export default router
