import React from 'react'
import { Button, Grid, Paper, TextField} from '@mui/material'
const Adduser=()=>{

    const paperStyle={padding:20,height:'65vh',width:280,margin:'30px auto' }
    const textStyle={marginTop:'10px'}
    const btnStyle={margin:'10px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Create New User</h2>
                </Grid>
                <TextField label='Name' placeholder='Enter Fullname' fullWidth required/>
                <TextField style={textStyle} label='Phone' placeholder='Enter Phone Number' type='tel' fullWidth required/>
                <TextField style={textStyle} label='Email' placeholder='Enter Email' type='email' fullWidth required/>
                <TextField style={textStyle} label='Password' placeholder='Enter Password' type='password' fullWidth required/>
                <Button variant="contained" type='submit' color='primary' fullWidth style={btnStyle}>Sign in</Button>
            </Paper>

        </Grid>
    )
}

export default Adduser