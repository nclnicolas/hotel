import React from 'react'
import { Outlet } from "react-router-dom";
import '../styles/FooterStyle.css';
import Mail from "../assets/images/mail-icon.png";
import Whatsapp from "../assets/images/whatsapp-icon.png";
import Facebook from "../assets/images/facebook-icon.png";
import Instagram from "../assets/images/instagram-icon.png";

const Footer = () => {
  return (
    <>
    <div className="footer">
          <div>
            <a href="/email"><img src={Mail} alt="Email"/></a>
            <a href="/telefono"><img src={Whatsapp} alt="Telefono"/></a>
            <a href="/facebook"><img src={Facebook} alt="Facebook"/></a>
            <a href="/instagram"><img src={Instagram} alt="Instagram"/></a>
          </div>
          <p>© 2022 Hotel. Todos los derechos reservados.</p>
          <Outlet />
        </div>
    </>
  )
}

export default Footer