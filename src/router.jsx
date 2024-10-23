import { createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./components/Home";

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