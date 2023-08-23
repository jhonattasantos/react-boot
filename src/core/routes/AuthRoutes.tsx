import ForgotPassword from "../pages/auth/ForgotPassword";
import SignIn from "../pages/auth/SignIn";

const prefix = '/auth';

const AuthRoutes = [
    { path: `${prefix}`, element: <SignIn />},
    { path: `${prefix}/sign-in`, element: <SignIn />},
    { path: `${prefix}/forgot-password`, element: <ForgotPassword />},
];

export default AuthRoutes;