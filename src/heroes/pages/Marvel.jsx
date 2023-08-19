import React from 'react'
import { PublicherPage } from './PublisherPage'
import { BannerPublisher } from '../components/BannerPublisher'

export const Marvel = () => {
    const img = "https://res.cloudinary.com/iluiss/image/upload/v1687651376/Heroes/hb4nccnegorea7uxd1o7.png"

    return (
        <PublicherPage publisher="Marvel Comics">
            <BannerPublisher color={"#ED1D24"} img={img} publisher="Marvel Comics"></BannerPublisher>
        </PublicherPage>
    )
}
