import React from 'react';
import Popup from 'reactjs-popup';
import { Button, TableRow, TableCell } from "@mui/material"

const RoomRow = ({ room, onInfo }) => (
    <TableRow>
        <TableCell>{room.id}</TableCell>
        <TableCell>{room.tipo}</TableCell>
        <TableCell align="center">
            
            <Popup trigger={<Button variant="contained" 
                                    color="primary" onClick={() => onInfo(room)}>Ver foto</Button>}
                                    position="right center">
                <img src={room.img} width="400em" alt=""/>
            </Popup>
        </TableCell>
    </TableRow>
);
export default RoomRow