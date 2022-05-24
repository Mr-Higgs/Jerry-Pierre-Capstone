import React from 'react'
import payment from "../../Assets/Icons/credit-card.svg"
import access from "../../Assets/Icons/key-fill.svg"
import chart from "../../Assets/Icons/graph-up.svg"

function OnlineCoursePkg() {
    return (
        <div className="card-group m-5">
            <div className="card mt-5">
                <div className="m-2">
                    <div className="p-4">
                        <img src={payment} className="p-5 card-img-top" alt="payment"/>
                    </div>
                </div>
                <div className="card-body">
                    <h4 className="card-title mb-5"><strong>One time payment, Lifetime Access</strong></h4>
                    <p className="card-text">Once you've enrolled and paid, you'll have access to the course material for as long as you need. So devour it all in one weekend or take things slow. It's your choice!</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card mt-5">
                <div className="m-2">
                    <div className="p-4">
                        <img src={access} className="p-5 card-img-top" alt="access"/>
                    </div>
                </div>
                <div className="card-body">
                    <h4 className="card-title mb-5"><strong>24 Hour Access to online videos & discord community</strong></h4>
                    <p className="card-text">I'd be happy to answer any questions you might have. Therefore, when you enroll into Wolf of Forex you will also have access to the Trader Things discord community where we can all connect and share our trading ideas.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card mt-5">
                <div className="m-2">
                    <div className="p-4">
                        <img src={chart} className="p-5 card-img-top" alt="chart"/>
                    </div>
                </div>
                <div className="card-body">
                    <h4 className="card-title mb-5"><strong>Weekly chart breakdowns</strong></h4>
                    <p className="card-text">You can apply the same technical strategies to crypto, commodities, and to the stock & equity options market. With access to our discord channels you can discover & share new ways of approaching the market.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    )
}

export default OnlineCoursePkg