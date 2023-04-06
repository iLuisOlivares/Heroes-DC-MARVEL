import { AppRouter } from "./router/AppRouter"
import { Navbar } from "./UI/Components/NavBar"


export const HeroesApp = () => {
    return (
        <>
            <Navbar></Navbar>
            <AppRouter></AppRouter>

        </>
    )
}
