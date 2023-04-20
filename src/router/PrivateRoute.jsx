import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {

    const { isLogged } = useContext(AuthContext);

    return (isLogged)
        ? <div>{children}</div>
        : <Navigate to='/login'></Navigate>

}
