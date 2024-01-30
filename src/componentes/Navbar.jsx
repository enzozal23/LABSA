import React, { useState } from 'react'
import "../../src/App.css"
import logo from "../../src/img/labsa-logo.png"
function Navbar() {

    const [collapse, setCollapse] = useState(true)
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-css">
                <div className="container-fluid">


                    <a className="navbar-brand nav-title" href="#main"> <img src={logo} alt="Labsa Laboratorio" className='navbar-logo' /></a>
                    <button onClick={() => setCollapse(!collapse)} className="navbar-toggler button-movile" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        {collapse ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list bars-menu" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg bars-close" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>}

                    </button>
                    <div className="collapse navbar-collapse nav-items" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a className="nav-link" href="#formularios">Formularios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contacto">Contacto</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-disabled="true" href="#nosotros">nosotros</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar