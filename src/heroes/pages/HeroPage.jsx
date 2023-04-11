import { useState, useEffect, useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { CollapseHero } from "../components/CollapseHero";
import { getHeroByID } from "../helpers/getHeroes";
export const HeroPage = () => {

    const { id } = useParams();
    const hero = useMemo(() => getHeroByID(id), [id]);
    const navigate = useNavigate();
    if (!hero) {
        return <Navigate to="/main" />
    }
    const onNavigateBack = () => {
        navigate(-1);
    }

    const imgUrl = `../src/assets/${id}.jpg`;

    return (
        <div className="m-5 row animate__animated animate__fadeInLeft">


            <div className="alert alert-warning" role="alert">
                ℹ️ Aviso - Pagina en modificacion!
            </div>
            <div className="col-4">
                <img src={imgUrl} alt={hero.id} className="img-thumbnail " />

            </div>
            <div className="col-8 ">
                <h3>{hero.superhero}</h3>
                <p className="text-secondary">{hero.publisher}</p>
                <div className="pt-3">
                    <div>
                        <p>{hero.description}</p>
                    </div>

                    <div class="accordion" id="accordionPanelsStayOpenExample">
                        <CollapseHero id={2} tittle="Primera aparicion" content={hero.first_appearance}></CollapseHero>
                        <CollapseHero id={3} tittle={`¿Quienes han sido ${hero.superhero}?`} content={hero.characters}></CollapseHero>
                    </div>
                </div>

                <button onClick={onNavigateBack} className="btn btn-warning text-dark">Regresar</button>

            </div >
        </div>
    )
}
