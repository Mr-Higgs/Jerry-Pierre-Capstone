import React from 'react'
import daytrader from '../../Assets/Images/daytrader.jpg'
import wfx from '../../Assets/Images/traderthings-logo.png'
import tc from '../../Assets/Images/indicator-chart.jpg'

function CourseCard() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card m-4" style={{width: "18rem"}}>
                        <img src={wfx} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"><strong>Wolf of Forex: Bundle </strong></h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-success">Enroll</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card m-4" style={{width: "18rem"}}>
                        <img src={tc} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"><strong>Wolf of Forex: Technical Starter Pack </strong></h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-success">Enroll</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card m-4" style={{width: "18rem"}}>
                        <img src={daytrader} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"><strong>Wolf of Forex: Learn to Earn Discord</strong></h5>
                            <p className="card-text">The Learn to Earn package will provide you with access to the Trader Things discord community where we can all connect and share our trading ideas. With access to our discord channels you can discover & share new ways of approaching the market.</p>
                            <a href="https://launchpass.com/trader-things-server/wolf-pack" target="_blank" className="btn btn-success">Enroll</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default CourseCard