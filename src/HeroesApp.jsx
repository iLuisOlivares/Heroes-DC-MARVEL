import { useState } from "react"
import { AppRouter } from "./router/AppRouter"
import { Navbar } from "./UI"


export const HeroesApp = () => {
    const [auth, setAuth] = useState(false);


    return (
        <>
            {auth && <Navbar></Navbar>}

            <AppRouter></AppRouter>

        </>
    )
}
