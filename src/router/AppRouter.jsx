import { Navigate, Route, Routes } from "react-router-dom"
import { HeroesRoutes } from "../heroes";
import { Login } from "../auth";
import { Navbar } from "../UI";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {


    return (
        <>

            <Routes>

                <Route path="/login" element={
                    <PublicRoute>
                        <Login></Login>
                    </PublicRoute>} />

                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>} />




            </Routes>
        </>
    )
}
