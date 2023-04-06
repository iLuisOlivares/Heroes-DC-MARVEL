import { Navigate, Route, Routes } from "react-router-dom"
import { Dc, Marvel } from "../heroes";
import { Login } from "../auth";
import { Home } from "../pages";

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
