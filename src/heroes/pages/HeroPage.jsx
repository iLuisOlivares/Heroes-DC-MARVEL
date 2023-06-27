import { useState, useEffect, useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { CollapseHero } from "../components/CollapseHero";
import { getHeroByID } from "../helpers/getHeroes";
import useFetch from "../../UI/hooks/useFetch";
export const HeroPage = () => {
    const { id } = useParams();
    // const hero = useMemo(() => getHeroByID(id), [id]);
    const { data, error, isLoading } = useFetch('http://127.0.0.1:8000/api/characters/' + id + '/');

    const navigate = useNavigate();
    if (!isLoading && data.detail) {
        return <Navigate to="/" />
    }


    const dcLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1200px-DC_Comics_logo.svg.png"

    const marvelLogo = "https://1000marcas.net/wp-content/uploads/2021/07/Marvel-Comics-logo.png"

    const onNavigateBack = () => {
        navigate(-1);
    }

    const imgUrl = `../src/assets/${id}.jpg`;

    return (
        <div className="m-5 row animate__animated animate__fadeInLeft">



            {
                isLoading ? <p className="text-dark">Loading</p>
                    :
                    <div className="m-1 row animate__animated animate__fadeInLeft">
                        <div className="alert alert-warning" role="alert">
                            ℹ️ Aviso - Pagina en modificacion!
                        </div>
                        <div className="col-4">
                            <img src={data.image} alt={data.superhero_name} className="img-thumbnail img-hero " />
                        </div>

                        <div className="col-8 ">
                            <div className="d-flex ">
                                <div className="me-auto align-self-center "> <h3 className="mb-0">{data.superhero_name}</h3></div>
                                {
                                    data.publisher === "DC Comics" ? <div className="align-self-center" > <img className="logo" src={dcLogo} alt="" /></div> :
                                        <div className="align-self-center" > <img className="logo" src={marvelLogo} alt="" /></div>
                                }


                            </div>
                            <p className="text-secondary">{data.alias}</p>
                            <div className="pt-3">
                                <div>
                                    <p>{data.description}</p>
                                </div>

                                <div className="accordion" id="accordionPanelsStayOpenExample">
                                    <CollapseHero id={1} tittle="Nombre" content={data.name}></CollapseHero>
                                    <CollapseHero id={3} tittle={`Altura`} content={data.height}></CollapseHero>
                                    <CollapseHero id={4} tittle={`Raza`} content={data.race}></CollapseHero>
                                    <CollapseHero id={2} tittle="Primera aparicion" content={data.first_appearance}></CollapseHero>
                                    <CollapseHero id={5} tittle={`Localizacion`} content={data.location.city}></CollapseHero>
                                </div>
                            </div>

                            <button onClick={onNavigateBack} className="btn btn-warning text-dark">Regresar</button>

                        </div >

                    </div>


            }

        </div>
    )
}
