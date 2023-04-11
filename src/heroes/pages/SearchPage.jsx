import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../UI/hooks/useForm";
import queryString from 'query-string'
import { getHeroByName } from "../helpers/getHeroes";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    const { buscador, onInputChange } = useForm({
        buscador: q
    });


    const heroes = getHeroByName(q);

    const onSubmit = (e) => {
        e.preventDefault();
        navigate(`?q=${buscador.toLowerCase().trim()}`)
    }



    return (
        <div>
            <h2>Buscador</h2>

            <div className="col">
                <hr />
                <form onSubmit={onSubmit}>
                    <input name="buscador" type="text" placeholder="Busca un superheroe" onChange={onInputChange} className="form-control" value={buscador} />
                    <button className="mt-2 btn btn-danger">Buscar</button>

                </form>

                <div className="my-5 col">
                    <h3>Resultados</h3>

                    {
                        q === '' ? <div className="alert alert-primary animate__animated animate__pulse">
                            Busca un heroe!! 🦸
                        </div> :

                            heroes.length === 0 ?
                                <div className="alert alert-danger animate__animated animate__pulse">
                                    Heroe con caracteres <b>{q} </b>  no encontrado!! 🦹
                                </div>
                                :

                                heroes.map(hero => (
                                    <HeroCard publisher={hero.publisher} key={hero.id} id={hero.id} superhero={hero.superhero} alter_ego={hero.alter_ego} characters={hero.characters}></HeroCard>
                                ))




                    }







                </div>
            </div>



        </div >
    )
}
