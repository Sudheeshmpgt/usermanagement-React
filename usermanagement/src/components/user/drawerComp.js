import { Grid, Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
const pages = ["Services", "About-Us", "Contact-Us"]

function DrawerComp() {
    const [openDrawer, setOpenDrawer] = useState(false)

    return (

        <Grid>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List>
                    {
                        pages.map((page, index) => (
                            <ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
                                <ListItemIcon>
                                    <ListItemText>{page}</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        ))
                    }

                </List>
            </Drawer>
            <IconButton sx={{ color: 'white' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </Grid>
    )
}

export default DrawerComp