import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../../pages"
import { Navbar } from "../../UI"
import { Dc, Marvel, SearchPage, HeroPage } from "../pages"
import { Docs } from "../pages/Docs"

export const HeroesRoutes = () => {
    return (
        <div style={{ 'height': '100vh' }}>
            <Navbar></Navbar>
            <div  >
                <Routes >

                    <Route path="/" element={<Home />}></Route>

                    <Route path="/dc" element={<Dc />}></Route>

                    <Route path="/marvel" element={<Marvel />}></Route>
                    <Route path="/docs" element={<Docs />}></Route>

                    <Route path="/search" element={<SearchPage />}></Route>

                    <Route path="/hero/:id" element={<HeroPage />}></Route>


                </Routes >

            </div >

        </div>

    )
}
