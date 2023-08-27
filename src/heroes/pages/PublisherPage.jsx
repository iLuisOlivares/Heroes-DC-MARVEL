import { HeroesList } from "../components"
import wave1 from '../../assets/page_wave1.png'
import wave2 from '../../assets/page_wave2.png'

export const PublicherPage = ({ search, children, publisher }) => {

    return (
        <>
            <div className="wave_container">
                <div className=" d-flex justify-content-center m-5">
                    {children}
                </div>
                <HeroesList search={search} publisher={publisher}></HeroesList>
                <div className=" wave_right pe-none position-absolute   translate-middle-x">
                    <img className="w-100" src={wave1}>
                    </img>
                </div>
                <div className=" wave_left pe-none position-absolute   translate-middle-x">
                    <img className="w-100" src={wave2}>
                    </img>
                </div>

            </div>
        </>
    )
}
