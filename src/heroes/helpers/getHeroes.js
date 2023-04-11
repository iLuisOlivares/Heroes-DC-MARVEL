import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {

    const validPublishers = ["DC Comics", "Marvel Comics"];

    if (!validPublishers.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" is not valid`);
    }

    return heroes.filter((hero) => hero.publisher === publisher);


}

export const getHeroByID = (id) => {

    return heroes.find((hero) => hero.id === id);
}