import React,{useState} from 'react'
import {Avatar, Button, Grid, Paper, TextField} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Adminlogin=()=>{
const navigate=useNavigate()
    const [admin,setAdmin]=useState({
        email:'',
        password:'',
    })
    
    const handleChange=(e)=>{
        const {name,value}=e.target
        setAdmin({
            ...admin,
            [name]:value
        })
    }
    const login=()=>{
        const {email,password}=admin
        if(email && password){
            axios.post("http://localhost:9000/route/admin",admin)
            .then((res)=>{
                alert(res.data.message)
                navigate('/admindashboard')
            })
        }else{
            alert("Invalid credentials")
        }
    }

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
                <TextField label='Username' placeholder='Enter Username' fullWidth required name='email' value={admin.email} onChange={handleChange}/>
                <TextField style={textStyle} label='Password' placeholder='Enter Password' type='password' fullWidth required name='password' value={admin.password} onChange={handleChange}/>
                <Button onClick={login}  variant="contained" type='submit' color='primary' fullWidth style={btnStyle}>Sign in</Button>
            </Paper>

        </Grid>
    )
}

export default Adminlogin