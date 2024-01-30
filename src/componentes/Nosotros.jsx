import React from 'react'
import "../../src/App.css"
import nosotros1 from "../img/nosotros1.png"
function Nosotros() {
    return (
        <div className='nosotros' id="nosotros">
            <div className='nosotrosIn'>
                <h4>Quiénes Somos</h4>
                <p> LABSA Chaco, tu laboratorio animal de confianza, liderado por la Mv. María Julieta Vargas MP 519. Nos enorgullece ofrecer servicios de análisis de primera categoría para grandes y pequeños animales, respaldados por más de 20 años de experiencia en el campo de la sanidad animal.</p></div>
            <img className='img-nosotros' src={nosotros1} alt="" />
        </div>
    )
}

export default Nosotros
