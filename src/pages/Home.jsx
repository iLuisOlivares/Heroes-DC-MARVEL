import useFetch from "../UI/hooks/useFetch";


export const Home = () => {
    const { data, error, isLoading } = useFetch('http://127.0.0.1:8000/api/superheroes/');


    return (
        <div className="d-flex justify-content-center home-text">
            <p>
                Tu pagina para <span className="text-danger">visualizar</span> tus <span className="text-primary">Personajes</span> favoritos
            </p>


        </div >
    );
};
