import React, { useState } from 'react'
import { PublicherPage } from './PublisherPage'
import { BannerPublisher } from '../components/BannerPublisher'

export const Marvel = () => {
    const img = "https://res.cloudinary.com/iluiss/image/upload/v1693087302/Heroes/t5u0dp6qmyf6revhxlqw.png"
    const [search, setSearch] = useState('');
    const handlelSearch = (e) => {
        setSearch(e.target.value);
    }
    return (
        <PublicherPage search={search} handlelSearch={handlelSearch} publisher="Marvel Comics">
            <BannerPublisher handlelSearch={handlelSearch} color={"#ED1D24"} img={img} publisher="Marvel Comics"></BannerPublisher>
        </PublicherPage>
    )
}
