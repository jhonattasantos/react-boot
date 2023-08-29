import Home from "../pages/private/Home";

const prefix = '';

const PrivateRoutes = [
    { path: `${prefix}`, element: <Home />},
    { path: `${prefix}/home`, element: <Home />},
];

export default PrivateRoutes;