import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCardLoading = () => {
    return (
        <div className="col">
            <div className="card card_hero">
                <div className="row g-0 height-100">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 class="card-title placeholder-glow mt-4">
                                <span class="placeholder col-6"></span>
                            </h5>
                            <p class="card-text placeholder-glow">
                                <span class="placeholder col-10"></span>
                                <span class="placeholder col-10"></span>
                                <span class="placeholder col-10"></span>
                                <span class="placeholder col-10"></span>
                                <span class="placeholder col-10"></span>
                                <span class="placeholder col-10"></span>
                            </p>
                            <Link style={{ "color": "#8C30F5", "textDecoration": "none" }} className="text disabled placeholder" >Explorar ➤</Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={'https://www.solidbackgrounds.com/images/1920x1080/1920x1080-gray-solid-color-background.jpg'} className="img-fluid rounded card-image" alt="..." />

                    </div>
                </div>
            </div>
        </div>
    )
}


