import React, { useState } from 'react'
import form1 from "../formularios/brucelosis.xls"
import form2 from "../formularios/planillaSangrado.xls"
import formPDF1 from "../formularios/brucelosis.pdf"
import formPDF2 from "../formularios/planillaSangrado.pdf"

function Formularios() {
    const [preview, setPreview] = useState(false)
    function handleClick(e) {
        console.log(e)
        setPreview(!preview)
    }
    const [preview2, setPreview2] = useState(false)
    function handleClick2(e) {

        setPreview2(!preview2)
    }

    return (

        <div className='formulario-container' id="formularios">

            <h1>Descargas de Formularios</h1>
            <div className='forms-container'>
                <div><p> <strong>Nombre:</strong> <br /> Protocolo brucelosis SENASA </p><hr />
                    <p>
                        <strong>Descripcion:</strong> <br /> Protocolo de toma y envio de muestras al laboratorio

                    </p></div>
                <div className='botones-download'>

                    <a title='descargar Excel' download="Nuevo Protocolo Of brucelosis SENASA" href={form1}><i id='excel' className="bi bi-file-earmark-spreadsheet"></i>
                    </a>
                    <a title='descargar PDF' download="Nuevo Protocolo Of brucelosis SENASA" href={formPDF1}><i id='pdf' className="bi bi-filetype-pdf"></i>
                    </a>
                    <button onClick={handleClick}
                        className='vista-previa1'><i className="bi bi-eye"></i></button>

                </div>




                {
                    preview && <div className='embed-contain'>
                        <button onClick={handleClick}
                            className='cerrar'> X Cerrar vista previa </button><embed className='embed' type='application/pdf' src={formPDF1}></embed>

                    </div>
                }
            </div>



            <div className='forms-container'>
                <div>
                    <p> <strong>Nombre:</strong> <br /> Planilla sangrado</p><hr />
                    <p>
                        <strong>Descripcion:</strong> <br /> Protocolo de toma y envio de muestras al laboratorio

                    </p>




                </div>




                <div className='botones-download'>
                    <a title='descargar Excel' download="Planilla Sangrado" href={form2}><i id='excel' className="bi bi-file-earmark-spreadsheet"></i></a>
                    <a title='descargar PDF' download="Planilla Sangrado" href={formPDF2}><i id='pdf' className="bi bi-filetype-pdf"></i></a>
                    <button onClick={handleClick2}
                        className='vista-previa1'><i className="bi bi-eye"></i></button>
                </div>




                {
                    preview2 && <div className='embed-contain'>
                        <button onClick={handleClick2}
                            className='cerrar'> X Cerrar vista previa </button><embed className='embed' type='application/pdf' src={formPDF1}></embed>

                    </div>
                }
            </div>

        </div >
    )
}

export default Formularios
