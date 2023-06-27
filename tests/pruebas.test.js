import { render, screen, waitFor } from '@testing-library/react';
import { HeroCard } from '../src/heroes/components/HeroCard';
import { MemoryRouter } from 'react-router-dom';
import { Dc, Marvel } from '../src/heroes';


// TEST DE PRUEBA A HeroList
describe('Pruebas en publisher pages', () => {


    test('Debe mostrar la seccion respectiva de Marvel', async () => {
        const publisher = 'Marvel Comics';
        const { container, getByText } = render(
            <MemoryRouter>
                <Marvel></Marvel>
            </MemoryRouter>

        );

        expect(getByText(publisher)).toBeTruthy();
    });

    test('Debe mostrar la seccion respectiva de Dc', async () => {
        const publisher = 'Dc Comics';
        const { container, getByText } = render(
            <MemoryRouter>
                <Dc></Dc>
            </MemoryRouter>

        );

        expect(getByText(publisher)).toBeTruthy();
    });


});


// TEST DE PRUEBA A HeroCard
describe('Pruebas en <HeroCard>', () => {

    const description = "Batman es un superhéroe que lucha contra el crimen en la ciudad de Gotham. Es conocido por su astucia, su habilidad para el combate cuerpo a cuerpo y sus gadgets tecnológicos."

    test('debe Hacer match con el snapshot', () => {

        const { container } = render(<MemoryRouter>
            <HeroCard publisher={"Dc Comics"} key={"Batman"} id={"Batman"} superhero={"Batman"} alter_ego={"Bruce Wayne"} description={description} image={"https://res.cloudinary.com/iluiss/image/upload/v1687543445/Heroes/unblscke0mqpi7vqoxtd.jpg"} />
        </MemoryRouter>)

        expect(container).toMatchSnapshot();
    });

    test('La descripcion debe estar presente en el componente', () => {

        const { container, getByText } = render(<MemoryRouter>
            <HeroCard publisher={"Dc Comics"} key={"Batman"} id={"Batman"} superhero={"Batman"} alter_ego={"Bruce Wayne"} description={description} image={"https://res.cloudinary.com/iluiss/image/upload/v1687543445/Heroes/unblscke0mqpi7vqoxtd.jpg"} />
        </MemoryRouter>)

        expect(getByText(description)).toBeTruthy();
    });



});



