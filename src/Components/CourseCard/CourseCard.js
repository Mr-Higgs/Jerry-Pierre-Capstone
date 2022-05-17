import React from 'react'
import daytrader from '../../Assets/Images/daytrader.jpg'

function CourseCard() {
  return (
        <div>
            <div class="card" style="width: 18rem;">
                <img src={daytrader} class="card-img-top" alt="Day-Trader"/>
                    <div class="card-body">
                        <p class="card-text">WFX TECHNICAL STARTER PACK</p>
                    </div>
            </div>
        </div>
    )
}

export default CourseCard