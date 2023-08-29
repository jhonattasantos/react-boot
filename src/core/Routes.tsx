import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import ModulesRoutes from "../modules/ModulesRoutes";


export const publicRoutes = [
    ...PublicRoutes,
];

export const privateRoutes = [
    ...PrivateRoutes,
    ...ModulesRoutes
]