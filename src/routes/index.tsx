import HomeRoutes from "../core/routes/HomeRoutes";
import AuthRoutes from "../core/routes/AuthRoutes";
import Modules from "../modules";


export const rotasPublicas = [
    ...AuthRoutes,
];

export const rotasPrivadas = [
    ...HomeRoutes,
    ...Modules
]