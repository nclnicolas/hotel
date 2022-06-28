import React, { useState } from 'react';
import Footer from '../components/Footer';
import '../styles/ContactoStyle.css';


const Contacto = () => {
  const [nameUser, setNameUser] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [mesagge, setMesagge] = useState('');

  const validate = (nameUser, email, telephone, mesagge) => {
    if(nameUser.length < 3) return 'Complete Nombre';
    if(!email.includes('@')) return 'Complete Email';
    if(telephone.length < 8) return 'Complete Telefono';
    if(mesagge.length < 10) return 'Complete Mensaje';
  }

  const errorMesagge = validate(nameUser, email, telephone, mesagge)

  return (
    <div className="container-footer">
    <div className="container-contacto">
      <h2>Hace tu consulta, estamos para servirte!</h2>
      <p>Completa el formulario o llámanos a los teléfonos indicados más abajo 
        para aclarar tus dudas o solicitar una reserva.</p>

        <form  className="form" 
          >

            <input 
            type="text" 
            name='nameUser'  
            className='input-form' 
            value={nameUser} 
            onChange={ev => setNameUser(ev.target.value)} 
            placeholder='Nombre'
            />
            <input 
            type="email" 
            name='email' 
            className='input-form' 
            value={email}
            onChange={ev => setEmail(ev.target.value)}  
            placeholder='Direccion de correo electronico'
            />
            <input 
            type="number" 
            name='telephone' 
            className='input-form' 
            value={telephone}
            onChange={ev => setTelephone(ev.target.value)}  
            placeholder='Telefono'
            />
            <textarea 
            name="mesagge" 
            id="" cols="30" rows="10" 
            className='input-form' 
            value={mesagge}
            onChange={ev => setMesagge(ev.target.value)}  
            placeholder='Mensaje'>
            </textarea>
            <p>{errorMesagge }</p>
            <button 
            type="submit" 
            disabled={errorMesagge} 
            className='botton-enviar'>
            Enviar</button>

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