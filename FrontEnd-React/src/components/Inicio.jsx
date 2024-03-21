import React from 'react'
import banner from "../assets/beer-wallpaper.jpg"

export const Inicio = () => {
    return (
        <div>
            <div className="container">
                <img src={banner} alt="" />
                <h1>Bienvenido al Dashboard de Nexo Birrero</h1>
            </div>
        </div>
    )
}
