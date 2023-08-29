import McsRoutes  from './mcs/McsRoutes.js'
import SapsRoutes  from './saps/SapsRoutes.js'

const Modules = [
    ...McsRoutes,
    ...SapsRoutes
];

export default Modules;