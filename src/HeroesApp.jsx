import { useState, useEffect } from "react"
import { AppRouter } from "./router/AppRouter"
import { Navbar } from "./UI"
import { AuthProvider } from "./auth";


export const HeroesApp = () => {
    const [auth, setAuth] = useState(false);


    return (
        <>
            <AuthProvider>
                {auth && <Navbar></Navbar>}
                <AppRouter></AppRouter>


            </AuthProvider>


        </>
    )
}
