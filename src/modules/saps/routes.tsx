import About from "./pages/About";
import Dashboard from "./pages/Dashboard";

const prefix = '/saps';

const SapsRoutes = [
    { path: `${prefix}`, element: <Dashboard />},
    { path: `${prefix}/dashboard`, element: <Dashboard />},
    { path: `${prefix}/about`, element: <About />}
];

export default SapsRoutes;