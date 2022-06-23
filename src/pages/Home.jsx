import "../styles/HomeStyle.css";
import Hotel from "../assets/images/hotel.jpg";
import Single from "../assets/images/habitacion-single.jpg";
import Doble from "../assets/images/habitacion-doble.jpg";
import Triple from "../assets/images/habitacion-triple.jpg";
import Footer from '../components/Footer';



const Home = () => {

    const map = <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34374.18783004155!2d55.14913252336994!3d25.097073882707146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5adbb050ac44b8ae!2sFIVE%20Palm%20Jumeirah%20Hotel!5e0!3m2!1ses-419!2sar!4v1655494823821!5m2!1ses-419!2sar"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>

  return (
    <>
      <div className="home-container">

          {/* -----INFO---------------- */}
        <div className="info">
          <h3>Sorprendete</h3>
          <p>
            Contamos con amplias habitaciones climatizadas e insonorizadas para
            un descanso asegurado, que incluyen TV LED por cable, minibar, WiFi
            de alta velocidad y aparcamiento gratuito, además de un exquisito
            desayuno.
          </p>
          <p>
            En tu estadía podrás disfrutar de nuestro restaurante, salas de
            reuniones, gimnasio (costo adicional) y terraza, y hacer tu viaje
            más placentero con los servicios de custodia equipaje, transporte,
            conserjería, Room Service y mucho más!
          </p>
          <img src={Hotel} alt="Nuestro Hotel" />
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
            <img src={Hotel} alt="Nuestro Hotel" />
            </div>
        {/* ---------------------------------------------------- */}
        {/* -------------------UBICACION------------------------ */}
        <div className="ubicacion">
          <h3>Ubicacion Privilegiada</h3>
          <p>
            Cercano al Hotel, encontrarás todo tipo de servicios que harán tu
            estadía mucho más cómoda; bancos, restaurantes, librerías, comercio,
            playas y edificios emblemáticos
          </p>
          {map}
        </div>
        {/* ---------------------------------------------------- */}
        {/* -------------------UBICACION IMAGEN----------------- */}
        <div className="images-ubicacion">{map}</div>
        {/* ---------------------------------------------------- */}
        {/* --------------------FOOTER-------------------------- */}
        <Footer />
      </div>
    </>
  );
};
export default Home;
