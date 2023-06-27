import { HeroesList } from "../components";
import { BannerPublisher } from "../components/BannerPublisher";
export const Dc = () => {
    const img = "https://res.cloudinary.com/iluiss/image/upload/v1687651374/Heroes/rq1zadnkbebjpaufodok.png"

    return (
        <>
            <div className="container d-flex justify-content-center m-5">
                <BannerPublisher color={"#0376F2"} img={img} publisher="Dc Comics"></BannerPublisher>
            </div>
            <HeroesList publisher={"DC Comics"}></HeroesList>
        </>
    )
}
