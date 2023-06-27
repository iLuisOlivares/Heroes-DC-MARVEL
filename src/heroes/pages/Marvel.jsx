import { HeroesList, HeroCard } from "../components"
import { BannerPublisher } from "../components/BannerPublisher"

export const Marvel = () => {

    const img = "https://res.cloudinary.com/iluiss/image/upload/v1687651376/Heroes/hb4nccnegorea7uxd1o7.png"
    return (
        <>
            <div className="container d-flex justify-content-center m-5">
                <BannerPublisher color={"#ED1D24"} img={img} publisher="Marvel Comics"></BannerPublisher>
            </div>
            <HeroesList publisher={"Marvel Comics"}></HeroesList>
        </>
    )
}
