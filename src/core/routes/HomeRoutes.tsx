import Home from "../pages/home/Home";
import ChangePassword from "../pages/home/ChangePassword";

const prefix = '';

const HomeRoutes = [
    { path: `${prefix}`, element: <Home />},
    { path: `${prefix}/change-password`, element: <ChangePassword />},
];

export default HomeRoutes;