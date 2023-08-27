import React from 'react'
import wave1 from "./assets/page_wave1.png"
import wave2 from "./assets/page_wave2.png"

export const WavesPage = ({ children }) => {
    return (
        <div className="wave_cont">
            <div className="z-index d-flex justify-content-center m-5">
                {children}
            </div>
            <div className=" wave_right pe-none position-absolute   translate-middle-x ">
                <img className="w-100" src={wave1}>
                </img>
            </div>
            <div className=" wave_left pe-none position-absolute   translate-middle-x ">
                <img className="w-100" src={wave2}>
                </img>
            </div>

        </div>
    )
}
