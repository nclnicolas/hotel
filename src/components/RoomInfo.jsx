const RoomInfo = ({ id, tipo, img }) => (
    <div>
        {<h2>{img}</h2>}
        <table>
            <tbody>
                {/* Object.keys toma un objeto y retorna un arreglo con todas las keys (hp, attack, defense...). Vamos luego a apilar un map, que por cada elemento del arreglo, o sea, cada key, genere una table row con dos table data (key y valor) por ej: HP:75... etc  */}
                {Object.keys(id).map((key) => (
                    <tr key={key}>
                        <td>{img.key}:</td>
                        <td>{tipo.key}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default RoomInfo