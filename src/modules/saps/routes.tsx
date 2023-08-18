import Home from "./pages/Home";

const prefix = '/saps';

const SapsRoutes = [
    { path: `${prefix}`, element: <Home />},
    { path: `${prefix}/home`, element: <Home />}
];

export default SapsRoutes;