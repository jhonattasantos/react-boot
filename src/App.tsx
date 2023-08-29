import { Route, Routes } from "react-router-dom"
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './core/contexts/private/AuthProvider';
import AuthMiddleware from "./core/AuthMiddleware";
import { publicRoutes, privateRoutes } from "./core/Routes"
import PrivateLayout from "./core/layouts/PrivateLayout";
import PublicLayout from "./core/layouts/PublicLayout";

export const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    {
                        publicRoutes.map((route, index) => (
                            <Route
                                path={route.path}
                                element={
                                    <PublicLayout>
                                        {route.element}
                                    </PublicLayout>
                                }
                                key={index}
                            />
                        ))
                    }
                    {
                        privateRoutes.map((route, index) => (
                            <Route
                                path={route.path}
                                element={
                                    <AuthMiddleware>
                                        <PrivateLayout>
                                            {route.element}
                                        </PrivateLayout>
                                    </AuthMiddleware>
                                }
                                key={index}
                            />
                        ))
                    }
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}