import MgsRoutes  from './mgs/MgsRoutes.js'
import SapsRoutes  from './saps/SapsRoutes.js'

const Modules = [
    ...MgsRoutes,
    ...SapsRoutes
];

export default Modules;