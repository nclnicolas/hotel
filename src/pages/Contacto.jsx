import {Link} from 'react-router-dom';
import React from 'react';
import Footer from '../components/Footer';
import '../styles/ContactoStyle.css';


const Contacto = () => {
  return (
    <div className="container-footer">
    <div className="container-contacto">
      <h2>Hace tu consulta, estamos para servirte!</h2>
      <p>Completa el formulario o llámanos a los teléfonos indicados más abajo 
        para aclarar tus dudas o solicitar una reserva.</p>

        <form action="" className="form">
            <input type="text" className='input-form' placeholder='Nombre'/>
            <input type="email" className='input-form' placeholder='Direccion de correo electronico'/>
            <input type="number" className='input-form' placeholder='Telefono'/>
            <textarea name="" id="" cols="30" rows="10" className='input-form' placeholder='Mensaje'></textarea>
            <input type="submit" className='botton-enviar' value='Enviar' />
        </form>
    </div>
    <div className="rev-tel">
    <h2>Descansa con nosotros, <br /> te atenderemos como mereces!</h2>
      <p>Reserva o consulta llamando a </p>
      <p>  +54 11 1233223266 +54 11 2233445566 </p>
      <button className='btn-reserva'>Reservar</button>
    </div>
    <Footer />
    </div>
  )
}

export default Contacto