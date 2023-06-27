import React from 'react'

export const BannerPublisher = ({ img, publisher, color }) => {

    const style = {
        backgroundColor: color,
    };

    return (
        <div style={style} className='banner'>
            <div className='d-flex justify-content-evenly align-items-center h-100'>
                <div className='banner__img'>

                    <img src={img} alt="" />
                </div>

                <div className='banner__text'>
                    <p>{publisher} </p>
                    <div className="input-group">
                        <input type="search" className="form-control" placeholder="Buscar" aria-label="Search" aria-describedby="search-addon" />
                        <button type="button" className="btn btn-dark">Buscar</button>
                    </div>
                </div>


            </div>

        </div>


    )
}
