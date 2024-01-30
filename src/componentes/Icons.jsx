import React from 'react'
import logo from "../img/labsa-logo.png"

function Icons() {
    return (
        <div>
            <div className='icons'>
                <img className='backImg' src={logo} alt="" />
                <div className='icons-container'>
                    <i className="bi bi-clock-history"> </i><p>20 años de experiencia</p>
                    <i className="bi bi-globe2"></i><p>Capacitación continua</p>
                    <i className="bi bi-arrow-repeat"></i> <p>actualización tecnologica</p>
                    <i className="bi bi-recycle"></i><p>Responsabilidad Ambiental</p>

                </div>
            </div>
        </div>
    )
}

export default Icons
