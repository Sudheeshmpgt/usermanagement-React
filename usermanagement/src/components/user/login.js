import React,{useContext, useState} from 'react'
import {Avatar, Button, Grid, Paper, TextField, Typography, Link} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { UserContext } from '../../store/usercontext';

const Login=()=>{

    const navigate=useNavigate()
    const {setLoginUserDetails}=useContext(UserContext)
    const [user,setUser]=useState({
        email:'',
        password:'',
    })
    
    const handleChange=(e)=>{
        const {name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const login=()=>{
        const {email,password}=user
        if(email && password){
            axios.post("http://localhost:9000/route/login",user)
            .then((res)=>{
                alert(res.data.message)
                setLoginUserDetails(res.data.user)
                navigate('/dashboard')
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
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' name='email' value={user.email} placeholder='Enter Username' fullWidth required onChange={handleChange}/>
                <TextField style={textStyle} name='password' value={user.password} label='Password' placeholder='Enter Password' type='password' fullWidth required onChange={handleChange}/>
                <Button onClick={login} variant="contained" type='submit' color='primary' fullWidth style={btnStyle}>Sign in</Button>
                <Typography>Do you have an account? 
                    <Link onClick={()=>{navigate('/signup')}}>
                        Sign Up
                    </Link> 
                    
                </Typography>
            </Paper>

        </Grid>
    )
}

export default Login