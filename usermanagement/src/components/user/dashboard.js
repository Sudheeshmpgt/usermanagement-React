import { AppBar, Button, Grid, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme, Paper} from '@mui/material'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../store/usercontext'
import DrawerComp from './drawerComp'


function Dashboard() {
    const { userDetails,setLoginUserDetails } = useContext(UserContext)
    const navigate=useNavigate()
    const Logout=()=>{
        setLoginUserDetails({})
        navigate('/')
    }

    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
    const paperStyle = { padding: 20, height: '65vh', width: 900, margin: '50px auto' }
    const typographyStyle1 = { textAlign:'center', marginTop:'15%' }
    const typographyStyle2 = { textAlign:'center'}
    const pages = ["Services", "About-Us", "Contact-Us"]
    return (
        <>
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
                                    {userDetails.name}
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
                    <Button sx={{ marginLeft: 'auto' }} onClick={Logout} variant='contained'>Logout</Button>
                </Toolbar>

            </AppBar>
        </Grid>
        <Grid alignItems="center" justify="center">
        <Paper elevation={10} style={paperStyle}>
                <Typography variant="h4" style={typographyStyle1}>
                welcome 
                </Typography>
                <Typography variant="h2" style={typographyStyle2}>
                    {userDetails.name}
                </Typography>
            </Paper>
        </Grid>
        </>
    )
}

export default Dashboard