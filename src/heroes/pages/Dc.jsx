import { useState } from "react";
import { BannerPublisher } from "../components/BannerPublisher";
import { PublicherPage } from "./PublisherPage";

export const Dc = () => {
    const img = "https://res.cloudinary.com/iluiss/image/upload/v1687651374/Heroes/rq1zadnkbebjpaufodok.png"
    const [search, setSearch] = useState('');
    const handlelSearch = (e) => {
        setSearch(e.target.value);
    }
    return (
        <PublicherPage search={search} publisher="Dc Comics">
            <BannerPublisher handlelSearch={handlelSearch} color={"#0376F2"} img={img} publisher="Dc Comics"></BannerPublisher>
        </PublicherPage>
    )
}
