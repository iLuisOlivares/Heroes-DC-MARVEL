import { Navigate, Route, Routes } from "react-router-dom"
import { HeroesRoutes } from "../heroes";
import { Login } from "../auth";
import { Navbar } from "../UI";

export const AppRouter = () => {
    return (
        <>

            <Routes>

                <Route path="/login" element={<Login></Login>} />
                <Route path="/*" element={<HeroesRoutes />} />




            </Routes>
        </>
    )
}
