import { createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Dashboard from "./components/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <SignIn />

    },
    {
        path: "/dashboard",
        element: <Dashboard />

    }
])

export default router