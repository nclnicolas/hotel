import "../styles/PromocionesStyle.css";
import Cards from "../assets/images/cards.png";
import Single from "../assets/images/habitacion-single.jpg";
import Doble from "../assets/images/habitacion-doble.jpg";
import Triple from "../assets/images/habitacion-triple.jpg";
import Footer from '../components/Footer';

const Promociones = () => {

  return (
    <>
      <div className="home-container">

          {/* -----INFO---------------- */}
        <div className="info">
          <h3>20% de descuento en tu primera visita</h3>
          <p>
            Así es, con tu primera visita a nuestras instalaciones, tenés un descuento
            del 20% con cualquier medio de pago. Aceptamos todas las tarjetas de crédito y débito,
            pago en efectivo, Mercado Pago y otras billeteras virtuales.
          </p>
          <img src={Cards} alt="Tarjetas VISA, Master y American Express"></img>
          <p>
            Además tenés hasta 6 cuotas sin interés con los siguientes bancos:
            <ul>
              <li className="lista">Santander</li>
              <li className="lista">ICBC</li>
              <li className="lista">Nación</li>
              <li className="lista">BBVA</li>
            </ul>
          </p>
          
        </div>
        {/* ---------------------------------------------------- */}
        {/* -----HABITACIONES------------------------------------*/}
        <div className="habitaciones">
          <h3>Nuestras Habitaciones</h3>
          <p>
            Todas nuestras habitaciones están climatizadas e insonorizadas para
            un descanso asegurado. <br />
            Incluyen TV LED por cable, minibar, WiFi de alta velocidad y
            aparcamiento gratuito, además de un exquisito desayuno. <br />
          </p>
          <p>Elige la opción que más se acomode a tus necesidades!</p>

          <div className="habitaciones-container">
            <div>
              <img src={Single} alt="" />
              <h3>Single/Matrimonial</h3>
              <p>
                Amplias y acogedoras habitaciones con una enorme y cómoda cama
                Ultra Súper King, para que tu descanso y estadía en sea más que
                perfecto!
              </p>
            </div>
            <div>
              <img src={Doble} alt="" />
              <h3>Doble</h3>
              <p>
                Habitaciones con dos camas individuales, dispuestas en un gran
                espacio y con todas las comodidades para que disfrutes tu
                estadía en compañía.
              </p>
            </div>
            <div>
              <img src={Triple} alt="" />
              <h3>Triple</h3>
              <p>
                Habitaciones con tres camas individuales, distribuidas
                cómodamente para que compartas un agradable momento junto a tus
                amigos o familia!
              </p>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------- */}
        {/* ------------------INFO IMAGEN----------------------- */}
        <div className="images-home">
            <img src={Cards} alt="Nuestro Hotel" />
            </div>
        {/* ---------------------------------------------------- */}
        {/* ---------------------------------------------------- */}
        {/* --------------------FOOTER-------------------------- */}
        <Footer />
      </div>
    </>
  );
};
export default Promociones;