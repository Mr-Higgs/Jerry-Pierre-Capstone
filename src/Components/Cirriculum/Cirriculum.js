import React from 'react'
import locked from '../../../src/Assets/Icons/lock-fill.svg'
import unlocked from '../../../src/Assets/Icons/unlock-fill.svg'
import {Link} from 'react-router-dom'

function Cirriculum() {
  
  const titles = ["Introduction","How to use Trading View","Chart & Order Types","Pips","Brokers","Trading Sessions","What are Candlesticks?","Your Trading Plan"]
  const titles2 = ["Exchange Rates 101", "Macroeconomics 101","The Commitment of Traders Report", "Economic News","Market Correlations","Fundamental Analysis of a Stock","Intro to Options","Fundamental Analysis of a Cryptocurrency","Crypto Wallets","Intro to Crypto"]
  const titles3 = ["Candlestick Patterns","Chart Patterns","Confluence","Support & Resistance","Components of the Ichimoku","Strategies of Ichimoku","Fibonacci","Moving Averages","Relative Strength Index","Trading Styles","Triple Screen Techniques | Top Down Analysis"]
  const titles4 = ["Risk Assessment","Ratios","How to Backtest","Putting it all together! Part.1","Putting it all together! Part.2"]
  
  const isLoggedIn = () => {
    if (sessionStorage.getItem('token')) {
      return true
    } else {
      return false
    }
  }

  return (
    <div>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button collapsed bg-success text-dark bg-opacity-10" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              <strong>1-</strong> Getting Started
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">
              {titles.map((title) => {
                return(
                  <Link to= {`/current/${title}`} key={title.id} className="text-decoration-none text-success"><p><img src={isLoggedIn() ? unlocked  : locked } alt="locked" />{title}</p></Link>
                )
              })}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button className="accordion-button collapsed bg-success text-dark bg-opacity-10" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            <strong>2-</strong> Fundamental Analysis  
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div className="accordion-body">
              {titles2.map((title) => {
                return(
                  <Link to= {`/current/${title}`} key={title.id} className="text-decoration-none text-success"><p><img src={isLoggedIn() ? unlocked  : locked } alt="locked" />{title}</p></Link>
                )
              })}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button className="accordion-button collapsed bg-success text-dark bg-opacity-10" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            <strong>3-</strong>Technical Analysis
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
            <div className="accordion-body">
              {titles3.map((title) => {
                return(
                  <Link to= {`/current/${title}`} key={title.id} className="text-decoration-none text-success"><p><img src={isLoggedIn() ? unlocked  : locked } alt="locked" />{title}</p></Link>
                )
              })}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingFour">
            <button className="accordion-button collapsed bg-success text-dark bg-opacity-10" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
            <strong>4-</strong> Risk Management
            </button>
          </h2>
          <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
            <div className="accordion-body">
              {titles4.map((title) => {
                return(
                  <Link to= {`/current/${title}`} key={title.id} className="text-decoration-none text-success"><p><img src={isLoggedIn() ? unlocked  : locked } alt="locked" />{title}</p></Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cirriculum