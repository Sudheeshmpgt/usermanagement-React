import React from 'react'
import {Avatar, Button, Grid, Paper, TextField} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
const Adminlogin=()=>{

    const paperStyle={padding:20,height:'65vh',width:280,margin:'50px auto' }
    const avatarStyle={backgroundColor:'#5ecb5e', marginTop:'25px'}
    const textStyle={marginTop:'10px'}
    const btnStyle={margin:'10px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h1>ADMIN</h1>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter Username' fullWidth required/>
                <TextField style={textStyle} label='Password' placeholder='Enter Password' type='password' fullWidth required/>
                <Button variant="contained" type='submit' color='primary' fullWidth style={btnStyle}>Sign in</Button>
            </Paper>

        </Grid>
    )
}

export default Adminlogin