import React from 'react'
import "../../src/App.css"
function Contacto() {
    return (
        <div>

            <div className='contacto-container' id="contacto">
                <div className='horarios'>
                    <h3>Horarios del Laboratorio</h3>
                    <i className="bi bi-calendar-check"></i>
                    <p>Lunes a Viernes de 8.30 a 12.00 - 17.00 a 19.30 hs </p><hr />
                    <i className="bi bi-calendar-check"></i>
                    <p>Sábado de 10.00 a 12.00 hs</p><hr />
                    <i className="bi bi-calendar-x"></i>
                    <p>Domingos y Feriados  CERRADO</p>
                </div>

                <div className='contacto'>
                    <h3>Contacto</h3>
                    <div className='mail'>
                        <i className="bi bi-envelope"></i>
                        <p>labsa@labsachaco.com.ar</p>
                    </div>
                    <div className='phone'><i className="bi bi-telephone-fill"></i>
                        <p>Consultas: 3625-206552 </p></div>




                    <a className='instagram' href="https://www.instagram.com/labsa.chaco/"><i className="bi bi-instagram"></i></a>

                    <a className='whatsapp' href="https://api.whatsapp.com/send/?phone=5493625206552&text&type=phone_number&app_absent=0"><i className="bi bi-whatsapp"></i></a>


                </div>
                <iframe
                    className='map'
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.7646827634126!2d-58.99650402545112!3d-27.445443476333704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450d13177ac0e5%3A0xeffa19947925ded!2sAv.%20Hernandarias%2055%2C%20H3500%20Resistencia%2C%20Chaco!5e0!3m2!1sen!2sar!4v1701721338025!5m2!1sen!2sar"
                    title="Google Map"
                ></iframe>

            </div>
        </div>
    )
}

export default Contacto
