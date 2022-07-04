import "../styles/PromocionesStyle.css";
import Mp from "../assets/images/mp.jpg";
import Dolar from "../assets/images/dolar_peso.jpg";
import Crypto from "../assets/images/crypto.jpeg";
import Posnet from "../assets/images/posnet.jpg";
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
          <img src={Posnet} alt="Una tarjeta pasando por un postnet" />
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
        {/* -----MEDIOS DE PAGO------------------------------------*/}
        <div className="habitaciones">
          <h3>Todos los medios de pago 💵</h3>
          <p>
            ¿Efectivo, Mercado Pago, PayPal o tarjetas de crédito/débito? <br />
            ¡Aceptamos una gran variedad de medios de pago! Y no solo eso, <br />
            sino que podés combinar las formas de pago como quieras. <br />
            <br />
            <br />
          </p>

          <div className="habitaciones-container">
            <div>
              <img src={Mp} alt="Logo de Mercado Pago" />
              <h3>Billeteras virtuales</h3>
              <p>
                Pagá con billeteras virtuales como Mercado Pago, Ualá y PayPal.
                Consultá por las promociones especiales de MP. ¡Descuentos exclusivos
                según el nivel en el que estés!
              </p>
            </div>
            <div>
              <img src={Dolar} alt="Foto de pesos argentinos y dólares" />
              <h3>Efectivo</h3>
              <p>
                Podés abonar con pesos argentinos o con dólares (tomremos como)
                refrencia el valor de la moneda extranjera al momento de la
                transacción. Consultanos
              </p>
            </div>
            <div>
              <img src={Crypto} alt="Foto de cryptomonedas" />
              <h3>Cryptomonedas</h3>
              <p>
                Por supuesto que no vamos a quedarnos afuera de las nuevas
                modalidades de pago. Consultá cómo podés abonar tu habitación con
                cryptomonedas.
              </p>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------- */}
        {/* ------------------INFO IMAGEN----------------------- */}
        <div className="images-home">
            <img src={Posnet} alt="Una tarjeta pasando por un postnet" />
            </div>
        {/* ---------------------------------------------------- */}
        {/* ---------------------------------------------------- */}
        {/* --------------------FOOTER-------------------------- */}
        <iframe width="80%" height="90%"
                src="https://www.dolarsi.com/func/moduloArriba-n.html"
                className="cotizacion"
                frameborder="0" scrolling="0" allowfullscreen="">
        </iframe>
        <Footer />
      </div>
    </>
  );
};
export default Promociones;