import React from 'react'
import { TextField } from "@mui/material";


const RoomFilter = ({ setFilter }) => {
    return < TextField
        label="Search..." variant="filled"
        onChange={(e) => setFilter(e.target.value)}
    />
}


export default RoomFilter