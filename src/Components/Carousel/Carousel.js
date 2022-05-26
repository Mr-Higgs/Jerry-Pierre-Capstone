import React from 'react'
import currency from '../../Assets/Images/hong-kong.jpg'
import finance from '../../Assets/Images/financial-ins.jpg'
import barchart from '../../Assets/Images/barchart.jpg'

function Carousel() {
  return (
    <div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={finance} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-sm-block d-md-block">
                        <h5 className="fs-3">Wolf of Forex</h5>
                        <p className="fs-6">This course provides an overview of how to improve the quality of investment decisions in the foreign exchange market. Technically, these methods and strategies can be applied in any financial market.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={barchart} className="d-block w-100 mh-50" alt="..."/>
                    <div className="carousel-caption d-sm-block d-md-block">
                        <h5 className="fs-3">Knowledge is Power</h5>
                        <p className="fs-6">Wolf of Forex is home to the most effective online course for learning how to trade in the Foreign Exchange Market.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={currency} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-sm-block d-md-block">
                        <h5 className="fs-3">By the end of the course, you will be able to...</h5>
                        <p>Understand the driving forces in a economy, & accurately read & chart price action</p>
                        <p></p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default Carousel