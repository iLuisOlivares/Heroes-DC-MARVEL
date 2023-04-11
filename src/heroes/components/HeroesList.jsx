import React from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroes'
import { HeroCard } from './HeroCard';

export const HeroesList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher);


    return (

        <div className='row d-flex justify-content-center align-items-center'>
            {heroes.map(hero => (
                <HeroCard publisher={hero.publisher} key={hero.id} id={hero.id} superhero={hero.superhero} alter_ego={hero.alter_ego} characters={hero.characters}></HeroCard>
            ))
            }
        </div>
    )
};

