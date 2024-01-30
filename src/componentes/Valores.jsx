import React, { useEffect, useState } from 'react'
import "../../src/App.css"
import valores1 from "../img/valores1.jpg"
function Valores() {
    const [mobile, setMobile] = useState(false)
    const resolution = window.screen.availWidth
    useEffect(() => {

        if (resolution <= 974) {
            setMobile(!mobile)
        }

    }, [resolution])



    return (

        <>
            {mobile ?

                <div className="accordion" id="accordionExample">
                    <img className='img-valores' src={valores1} alt="" />
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                MISIÓN
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Contribuir al bienestar animal. Nos comprometemos a proporcionar resultados de alta calidad que promuevan la prevención y el tratamiento de enfermedades de pequeños y grandes animales.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                VISIÓN
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Ser líderes reconocidos a nivel Nea. Buscamos establecer estándares de excelencia, promoviendo la salud y la armonía entre los seres humanos y los animales, consolidando así un mundo más saludable y sostenible.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                VALORES
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>1.Compromiso con la Calidad: Nos esforzamos por ofrecer resultados y servicios que cumplan con los más altos estándares de calidad y seguridad. <br />

                                    2.Innovación Continua: Nos capacitamos constantemente para brindar resultados de excelencia.<br />

                                    3.Responsabilidad Social y Ambiental: Actuamos de manera ética, responsable y sostenible, contribuyendo al bienestar de la sociedad y al cuidado del medio ambiente.<br />

                                    4.Trabajo en Equipo: Valoramos y promovemos un entorno de trabajo colaborativo, donde cada miembro contribuye al éxito colectivo.<br />

                                    5.Integridad y Transparencia: Mantenemos altos estándares de integridad y transparencia en todas nuestras operaciones y servicios.<br /></p>
                            </div>
                        </div>
                    </div>
                </div> : <div className='valores'>
                    <img className='img-valores' src={valores1} alt="" />
                    <p>

                        <strong>MISIÓN</strong><br />

                        Contribuir al bienestar animal. Nos comprometemos a proporcionar resultados de alta calidad que promuevan la prevención y el tratamiento de enfermedades de pequeños y grandes animales.
                        <br />
                        <strong>VISIÓN</strong><br />

                        Ser líderes reconocidos a nivel Nea. Buscamos establecer estándares de excelencia, promoviendo la salud y la armonía entre los seres humanos y los animales, consolidando así un mundo más saludable y sostenible.
                        <br />
                        <strong>VALORES</strong><br />

                        1.Compromiso con la Calidad: Nos esforzamos por ofrecer resultados y servicios que cumplan con los más altos estándares de calidad y seguridad. <br />

                        2.Innovación Continua: Nos capacitamos constantemente para brindar resultados de excelencia.<br />

                        3.Responsabilidad Social y Ambiental: Actuamos de manera ética, responsable y sostenible, contribuyendo al bienestar de la sociedad y al cuidado del medio ambiente.<br />

                        4.Trabajo en Equipo: Valoramos y promovemos un entorno de trabajo colaborativo, donde cada miembro contribuye al éxito colectivo.<br />

                        5.Integridad y Transparencia: Mantenemos altos estándares de integridad y transparencia en todas nuestras operaciones y servicios.<br />

                    </p>




                </div>}




        </>
    )
}

export default Valores
