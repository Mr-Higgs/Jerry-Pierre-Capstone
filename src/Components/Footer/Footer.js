import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import instagram from '../../Assets/Icons/instagram.svg'
import youtube from '../../Assets/Icons/youtube.svg'
import discord from '../../Assets/Icons/discord.svg'

function Footer() {
  return (
    <div className="footer">
      <div className="footer__socials">
        <a href="https://www.instagram.com/_traderthings/" target="_blank">
          <img className="footer__socials-icon" src={instagram} alt="Instagram"/>
        </a>

        <a href="https://www.youtube.com/channel/UCBJQ7CaoeLXUOqFfZtO9vuA" target="_blank">
          <img className="footer__socials-icon" src={youtube} alt="Youtube"/>
        </a>

        <a href="https://discord.gg/CTuUGvXS" target="_blank">
          <img className="footer__socials-icon" src={discord} alt="Discord"/>
        </a>
        
      </div>
    </div>
  )
}

export default Footer