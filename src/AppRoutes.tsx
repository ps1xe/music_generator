import { Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "./routes";

const AppRouter = () => {

    const isAuth = !!localStorage.getItem('token')
    return (

        <Routes >

            {isAuth === true && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} />
            )}

            {publicRoutes.map(({ path, Component }) =>

                <Route key={path} path={path} element={<Component />} />

            )}
        </Routes>

    );
}
export default AppRouter;