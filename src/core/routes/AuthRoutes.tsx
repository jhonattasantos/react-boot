import ForgotPassword from "../pages/auth/ForgotPassword";
import SignIn from "../pages/auth/SignIn";

const prefix = '/auth';

const AuthRoutes = [
    { path: `${prefix}`, element: <SignIn />},
    { path: `${prefix}/login`, element: <SignIn />},
    { path: `${prefix}/esqueci-a-senha`, element: <ForgotPassword />},
];

export default AuthRoutes;