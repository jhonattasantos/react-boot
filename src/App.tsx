import { Route, Routes } from "react-router-dom"
import { rotasPublicas, rotasPrivadas } from "./routes"
import Authmiddleware from "./routes/Authmiddleware";
import LayoutPrivado from "./layouts/LayoutPrivado";
import LayoutPublico from "./layouts/LayoutPublico";

export const App = () => {
    return (
        <div>
            <Routes>
                {
                    rotasPublicas.map((route, index) => (
                        <Route
                            path={route.path}
                            element={<LayoutPublico>{route.element}</LayoutPublico>}
                            key={index}
                        />
                    ))
                }

                {
                    rotasPrivadas.map((route, index) => (
                        <Route
                            path={route.path}
                            element={
                                <Authmiddleware>
                                    <LayoutPrivado>
                                        {route.element}
                                    </LayoutPrivado>
                                </Authmiddleware>
                            }
                            key={index}
                        />
                    ))
                }
            </Routes>
        </div>
    );
}