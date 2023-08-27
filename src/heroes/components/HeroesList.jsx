import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroes'
import { HeroCard } from './HeroCard';
import useFetch from '../../UI/hooks/useFetch';
import { HeroListLoading } from './HeroListLoading';
export const HeroesList = ({ search, publisher }) => {

    // const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    const { data, error, isLoading } = useFetch('http://127.0.0.1:8000/api/characters/?search=' + publisher.replace(' ', '+'));
    return (
        <div style={{ "backgroundColor": "#3c3d41", "padding": "20px", "minHeight": "100vh" }}>
            {isLoading ? <HeroListLoading></HeroListLoading>
                : error
                    ? <p>Error: {error.message} </p>
                    : <div class="row row-cols-1 row-cols-md-3 g-4">
                        {data.filter((item) => item.superhero_name.toLowerCase().includes(search.toLowerCase())).map(hero => (
                            <HeroCard publisher={hero.publisher} key={hero.superhero_name} id={hero.superhero_name} superhero={hero.superhero_name} alter_ego={hero.alias} description={hero.description} image={hero.image}></HeroCard>
                        ))
                        }
                    </div>}
        </div>

    )
};

