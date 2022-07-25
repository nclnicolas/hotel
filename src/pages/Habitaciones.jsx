import React, { useState, useEffect } from "react";
import RoomFilter from "../components/RoomFilter";
import RoomTable from "../components/RoomTable";
import RoomInfo from "../components/RoomInfo";
import axios from 'axios';
import fut from '../../build/room.json'

const Habitaciones = () => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState("");
  const [selectedRoom, setSelectedRoom] = useState(null);

  /* function handleErrors(res) {
    if (!res.ok) throw Error(res.status)
    return res.json();
  }
 */
  const verHabitaciones = async() => {
    const datoHabitaciones = await axios.get('http://localhost:3000/room.json')
    console.log('ver', datoHabitaciones);
    setData(datoHabitaciones.data);
}

useEffect(() => {
    verHabitaciones();
}, [])
  
  //con Vite basta con poner el archivo en la carpeta exterior, con webpack habría que incluirla en la carpeta public
  /* useEffect(() => {
    fetch("http://localhost:3000/room.json")
      .then(res => handleErrors(res))
      .then(data => setData(data))
      .catch(error => console.log('el error', error))
  }, []) */


  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        width: "60vw",
        paddingTop: "1rem",
      }}
    >
      <h1 className="title">Nuestras habitaciones</h1>
      <div
        style={{
          display: "grid",
          alignItems: 'center',
          gridTemplateColumns: "80% 20%",
          gap: "2rem",
        }}
      >
        <div>
          <RoomFilter setFilter={setFilter} />

          <RoomTable data={data} filter={filter} setSelectedRoom={setSelectedRoom} />
        </div>
        {selectedRoom && <RoomInfo {...selectedRoom} />}
      </div>
    </div>

  );
}

export default Habitaciones;