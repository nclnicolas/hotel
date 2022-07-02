import React from 'react'
import RoomRow from "./RoomRow";
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"


const RoomTable = ({ data, filter, setSelectedRoom }) => {
    return (

        <TableContainer component={Paper} sx={{ display: 'flex', mt: '2em' }}>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell >Código de habitación</TableCell>
                        <TableCell >Tipo</TableCell>
                        <TableCell align="center">Imagen</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data
                    .filter(({tipo}) => 
                    tipo.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
                    )
                    .map((elem) => (
                            <RoomRow
                                key={elem.id}
                                room={elem}
                                // custom event, esto "camufla" el prop drilling porque, en realidad,
                                // el componente PokemonRow debería recibir directamente setSelectedPokemon y hacer allí la operación
                                onInfo={() => setSelectedRoom(elem)}
                            />
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default RoomTable