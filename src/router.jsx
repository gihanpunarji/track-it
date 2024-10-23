import { createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <SignIn />

    },
    {
        path: "/home",
        element: <Home />

    }
])

export default router