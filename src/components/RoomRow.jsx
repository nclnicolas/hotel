import { Button, TableRow, TableCell } from "@mui/material"

const RoomRow = ({ room, onInfo }) => (
    <TableRow>
        <TableCell>{room.id}</TableCell>
        <TableCell>{room.tipo}</TableCell>
        <TableCell align="center">
            <Button variant="outlined" color="secondary" onClick={() => onInfo(room)}>info</Button>
        </TableCell>
    </TableRow>
);
export default RoomRow