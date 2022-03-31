import React, { useState } from 'react'
import { Button, Grid, Paper, TextField} from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup=()=>{
const navigate=useNavigate()
const [user,setUser]=useState({
    name:'',
    phone:'',
    email:'',
    password:'',
    confirmPassword:''
})

const handleChange=(e)=>{
    const {name,value}=e.target
    setUser({
        ...user,
        [name]:value
    })
}

const register=()=>{
    const {name,phone,email,password,confirmPassword}=user
    if(name && phone && email && password && (password===confirmPassword)){
        axios.post("http://localhost:9000/route/register",user)
        .then((res)=>{
            alert(res.data.message)
            navigate('/')
        })
    }else{
        alert("Invalid Credetials")
    }
    
}

    const paperStyle={padding:20,height:'70vh',width:280,margin:'30px auto' }
    const textStyle={marginTop:'10px'}
    const btnStyle={margin:'10px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Sign Up</h2>
                </Grid>
                <TextField  name='name' value={user.name} label='Name' placeholder='Enter Fullname' fullWidth required onChange={handleChange}/>
                <TextField name='phone' value={user.phone} style={textStyle} label='Phone' placeholder='Enter Phone Number' type='tel' fullWidth required onChange={handleChange}/>
                <TextField name='email' value={user.email} style={textStyle} label='Email' placeholder='Enter Email' type='email' fullWidth required onChange={handleChange} />
                <TextField name='password' value={user.password} style={textStyle} label='Password' placeholder='Enter Password' type='password' fullWidth required onChange={handleChange} />
                <TextField name='confirmPassword' value={user.confirmPassword} style={textStyle} label='Confirm Password' placeholder='Confirm Password' type='password' fullWidth required onChange={handleChange} />
                <Button onClick={register} variant="contained" type='submit' color='primary' fullWidth style={btnStyle}>Sign Up</Button>
            </Paper>

        </Grid>
    )
}

export default Signup