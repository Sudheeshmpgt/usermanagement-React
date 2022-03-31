import { Grid,  IconButton } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

function AdminDrawerComp() {


    return (
        <Grid>
            <IconButton sx={{ color: 'white' }}>
                <MenuIcon />
            </IconButton>
        </Grid>
    )
}

export default AdminDrawerComp