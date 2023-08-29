import Home from "./pages/Home";

const prefix = '/mcs';

const MgsRoutes = [
    { path: `${prefix}`, element: <Home />},
    { path: `${prefix}/home`, element: <Home />}
];

export default MgsRoutes;