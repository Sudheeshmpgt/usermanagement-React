import React, { useContext } from 'react'
import { Button, Grid, Paper, TextField} from '@mui/material'
import { EditContext } from '../../store/editcontext'


const Update=()=>{
 const {editUser,setEditUser}=useContext(EditContext)

    const paperStyle={padding:20,height:'55vh',width:280,margin:'30px auto' }
    const textStyle={marginTop:'10px'}
    const btnStyle={margin:'10px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Edit User</h2>
                </Grid>
                <TextField value={editUser.name} label='Name' placeholder='Enter Fullname' fullWidth required/>
                <TextField value={editUser.phone} style={textStyle} label='Phone' placeholder='Enter Phone Number' type='tel' fullWidth required/>
                <TextField value={editUser.email} style={textStyle} label='Email' placeholder='Enter Email' type='email' fullWidth required/>
                <Button variant="contained" type='submit' color='primary' fullWidth style={btnStyle}>Update</Button>
            </Paper>

        </Grid>
    )
}

export default Update