import { Navigate, Route, Routes } from "react-router-dom"
import { Dc } from "../heroes/pages/Dc"
import { Marvel } from "../heroes/pages/Marvel"

import { Home } from "../pages/Home"
import { Login } from "../pages/Login"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/home" Component={Home}></Route>
                <Route path="/dc" Component={Dc}></Route>
                <Route path="/marvel" Component={Marvel}></Route>
                <Route path="/login" Component={Login} />


                <Route path="/*" element={<Navigate to={"/home"} />} />


            </Routes>
        </>
    )
}
