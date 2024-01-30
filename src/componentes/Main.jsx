import React from 'react'
import main1 from "../img/main1.png"
import main2 from "../img/main2.jpg"
import main3 from "../img/main3.png"
function Main() {
    return (
        <div id='main'>
            <div id="carouselExampleSlidesOnly carousel " className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner carousel-container">
                    <div className="carousel-item active">
                        <img src={main1} className="d-block w-100 carousel-img " alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={main2} className="d-block w-100 carousel-img" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={main3} className="d-block w-100 carousel-img " alt="..."></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
