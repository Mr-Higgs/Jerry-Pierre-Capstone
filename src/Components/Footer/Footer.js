import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import instagram from '../../Assets/Icons/instagram.svg'
import youtube from '../../Assets/Icons/youtube.svg'
import discord from '../../Assets/Icons/discord.svg'
import github from '../../Assets/Icons/github.svg'
import linkedin from '../../Assets/Icons/linkedin.svg'

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

        <a href="https://github.com/Mr-Higgs" target="_blank">
          <img className="footer__socials-icon" src={github} alt="GitHub"/>
        </a>

        <a href="https://www.linkedin.com/in/jerry-w-pierre/" target="_blank">
          <img className="footer__socials-icon" src={linkedin} alt="GitHub"/>
        </a>
        
      </div>
    </div>
  )
}

export default Footer