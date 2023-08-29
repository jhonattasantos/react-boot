import ForgotPassword from "../pages/public/ForgotPassword";
import LogIn from "../pages/public/LogIn";

const prefix = '/auth';

const PublicRoutes = [
    { path: `${prefix}`, element: <LogIn />},
    { path: `${prefix}/login`, element: <LogIn />},
    { path: `${prefix}/forgot-password`, element: <ForgotPassword />},
];

export default PublicRoutes;