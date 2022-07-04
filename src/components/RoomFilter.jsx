import React from 'react'
import { TextField } from "@mui/material";


const RoomFilter = ({ setFilter }) => {
    return < TextField
        label="Busque por tipo..." variant="filled"
        onChange={(e) => setFilter(e.target.value)}
        
    />
}


export default RoomFilter