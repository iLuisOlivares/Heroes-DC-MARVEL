import useFetch from "../UI/hooks/useFetch";
import { WavesPage } from "../WavesPage";


export const Home = () => {
    const { data, error, isLoading } = useFetch('http://127.0.0.1:8000/api/superheroes/');

    const dcLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1200px-DC_Comics_logo.svg.png"

    const marvelLogo = "https://1000marcas.net/wp-content/uploads/2021/07/Marvel-Comics-logo.png"


    return (
        <WavesPage>
            <div className=" mt-4">

                <div style={{ 'height': '100%' }} className="mh-100 d-flex justify-content-center ">



                    <div className="">
                        <p className="home-text">
                            Tu pagina para <span className="text-danger">visualizar</span> tus <span className="text-primary">Personajes</span> favoritos </p>
                        <div className="d-flex justify-content-center " >
                            <div className="align-self-center px-2" > <img className="non logo-home" src={marvelLogo} alt="" /></div>
                            <div className="align-self-center px-2 "> <img className="non logo-home" src={dcLogo} alt="" /></div>
                        </div>
                    </div>



                    <div style={{ 'width': '60%', "zIndex": 1 }} className="non position-absolute bottom-0 start-50 translate-middle-x">
                        <img oncontextmenu="return false" className="w-100" src="https://res.cloudinary.com/iluiss/image/upload/v1689983438/Heroes/zjdfcwpqfsxzgcetkhlk.png">
                        </img>
                    </div>

                    <div style={{ 'width': '100%' }} className="non position-absolute bottom-0 start-50 translate-middle-x">
                        <img className="w-100" src="https://res.cloudinary.com/iluiss/image/upload/v1693086917/Heroes/xj0xmczfeiuqfkyzxrgb.png">
                        </img>
                    </div>

                </div>

            </div >
        </WavesPage>
    );
};
