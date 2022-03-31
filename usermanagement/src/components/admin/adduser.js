import React,{useState} from 'react'
import { Button, Grid, Paper, TextField} from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Adduser=()=>{
    const navigate=useNavigate();
    const [user,setUser]=useState({
        name:'',
        phone:'',
        email:'',
        password:''
    })
    const handleChange=(e)=>{
        const {name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    const Add=()=>{
        const {name,phone,email,password}=user
        if(name && phone && email && password ){
            axios.post("http://localhost:9000/route/add",user)
            .then((res)=>{
                alert(res.data.message)
                navigate('/admindashboard')
            })
        }else{
            alert("Invalid Credetials")
        }
        
    }
    
    const paperStyle={padding:20,height:'65vh',width:280,margin:'30px auto' }
    const textStyle={marginTop:'10px'}
    const btnStyle={margin:'10px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Create New User</h2>
                </Grid>
                <TextField name='name' value={user.name} label='Name' placeholder='Enter Fullname' fullWidth required onChange={handleChange}/>
                <TextField name='phone' value={user.phone} style={textStyle} label='Phone' placeholder='Enter Phone Number' type='tel' fullWidth required onChange={handleChange}/>
                <TextField name='email' value={user.email} style={textStyle} label='Email' placeholder='Enter Email' type='email' fullWidth required onChange={handleChange}/>
                <TextField name='password' value={user.password} style={textStyle} label='Password' placeholder='Enter Password' type='password' fullWidth required onChange={handleChange}/>
                <Button onClick={Add} variant="contained" type='submit' color='primary' fullWidth style={btnStyle}>ADD</Button>
            </Paper>

        </Grid>
    )
}

export default Adduser