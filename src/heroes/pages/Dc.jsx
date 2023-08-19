import { BannerPublisher } from "../components/BannerPublisher";
import { PublicherPage } from "./PublisherPage";

export const Dc = () => {
    const img = "https://res.cloudinary.com/iluiss/image/upload/v1687651374/Heroes/rq1zadnkbebjpaufodok.png"

    return (
        <PublicherPage publisher="Dc Comics">
            <BannerPublisher color={"#0376F2"} img={img} publisher="Dc Comics"></BannerPublisher>
        </PublicherPage>
    )
}
