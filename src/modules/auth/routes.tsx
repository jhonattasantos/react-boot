import ForgotPassword from "./pages/forgot-password";
import SignIn from "./pages/sign-in";

const prefix = '/auth';

const AuthRoutes = [
    { path: `${prefix}`, element: <SignIn />},
    { path: `${prefix}/sign-in`, element: <SignIn />},
    { path: `${prefix}/forgot-password`, element: <ForgotPassword />},
];

export default AuthRoutes;