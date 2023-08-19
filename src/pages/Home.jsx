import useFetch from "../UI/hooks/useFetch";


export const Home = () => {
    const { data, error, isLoading } = useFetch('http://127.0.0.1:8000/api/superheroes/');


    return (
        <div className="position-relative mt-4">
            <div style={{ 'height': '82.8vh' }} className="mh-100 d-flex justify-content-center ">

                <p className="home-text">
                    Tu pagina para <span className="text-danger">visualizar</span> tus <span className="text-primary">Personajes</span> favoritos </p>

                <div style={{ 'width': '100%' }} className="position-absolute bottom-0 start-50 translate-middle-x">
                    <img className="w-100" src="https://res.cloudinary.com/iluiss/image/upload/v1687663500/Heroes/ivb041lxzhuztyckfyyy.png">
                    </img>
                </div>

                <div style={{ 'width': '60%' }} className="position-absolute bottom-0 start-50 translate-middle-x">
                    <img className="w-100" src="https://res.cloudinary.com/iluiss/image/upload/v1689983438/Heroes/zjdfcwpqfsxzgcetkhlk.png">
                    </img>
                </div>


            </div>

        </div >
    );
};
