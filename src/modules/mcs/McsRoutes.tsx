import Home from "./pages/Home";

const prefix = '/mcs';

const McsRoutes = [
    { path: `${prefix}`, element: <Home />},
    { path: `${prefix}/home`, element: <Home />}
];

export default McsRoutes;