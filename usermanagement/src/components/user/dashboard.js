import { AppBar, Button, Grid, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import DrawerComp from './drawerComp'

function Dashboard() {
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
    const pages = ["Services", "About-Us", "Contact-Us"]
    return (
        <Grid>
            <AppBar position='staic' sx={{ backgroundColor: '#05707e' }}>
                <Toolbar>
                    {
                        isMatch ? (
                            <>
                                <DrawerComp />
                            </>
                        ) : (
                            <>
                                <Typography>
                                    User
                                </Typography>
                                <Tabs textColor='inherit'>
                                    {
                                        pages.map((page, index) => (
                                            <Tab key={index} label={page} />
                                        ))
                                    }
                                </Tabs>
                            </>

                        )
                    }
                    <Button sx={{ marginLeft: 'auto' }} variant='contained'>Logout</Button>
                </Toolbar>

            </AppBar>
        </Grid>
    )
}

export default Dashboard