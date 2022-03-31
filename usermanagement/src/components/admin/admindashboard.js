import { AppBar, Button, Grid, Toolbar, Typography, useMediaQuery, useTheme, TextField } from '@mui/material'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminDrawerComp from './adminDrawerComp'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { EditContext } from '../../store/editcontext'


function AdminDashboard() {
const [user, setUser] = useState([])
const [search,setSearch]=useState("")
const {setEditUser}=useContext(EditContext)
const navigate = useNavigate()

    const getUserData = async () => {
        try {
            const data = await axios.get("http://localhost:9000/route/adminDashboard")
            setUser(data.data.user)
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        getUserData();
    }, [])

    const setId=(id)=>{
        axios.get(`http://localhost:9000/route/${id}`)
        .then((res)=>{
            setEditUser(res.data.data)
            navigate('/update')
        }).catch((err)=>{
            console.log(err)
        })
    }
    const deleteUser=(id)=>{
        axios.delete(`http://localhost:9000/route/${id}`)
        .then((res)=>{
            alert(res.data.message)
        
        })
    }

    const Logout = () => {
        navigate('/')
    }


    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
    const paperStyle = { padding: 20, height: '65vh', width: 900, margin: '50px auto' }


    return (
        <>
            <Grid>
                <AppBar position='static' sx={{ backgroundColor: '#05707e' }}>
                    <Toolbar>
                        {
                            isMatch ? (
                                <>
                                    <AdminDrawerComp />
                                </>
                            ) : (
                                <>
                                    <Typography>
                                        ADMIN
                                    </Typography>
                                </>
                            )
                        }
                        <TextField sx={{marginLeft:'50em'}} variant="standard" placeholder='Search here' name='search' value={search.value} onChange={(e)=>{setSearch(e.target.value)}}/>
                        <Button sx={{ marginLeft: 'auto' }} onClick={()=>{navigate('/adduser')}} variant='contained'>ADD User</Button>
                        <Button sx={{ marginLeft: 'auto' }} onClick={Logout} variant='contained'>Logout</Button>
                    </Toolbar>
                </AppBar>
            </Grid>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <TableContainer>
                        <Table sx={{ width: 900 }} aria-label="simple table">
                            <TableHead sx={{ backgroundColor: '#0037ff6e' }}>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell >Name</TableCell>
                                    <TableCell >Phone</TableCell>
                                    <TableCell >Email</TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {user.filter((data) =>{
                                    if(search === ""){
                                        return data
                                    }else if(data.name.toLowerCase().includes(search.toLowerCase())){
                                        return data
                                    }
                                })
                                .map((data,index) => (
                                    <TableRow
                                        key={data._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {index+1 }
                                        </TableCell>
                                        <TableCell >{data.name}</TableCell>
                                        <TableCell >{data.phone}</TableCell>
                                        <TableCell >{data.email}</TableCell>
                                        <TableCell >
                                            <Button 
                                            variant="outlined" 
                                            size="small"
                                            startIcon={<EditIcon />} 
                                            onClick={()=>setId(data._id)}>Edit</Button></TableCell>
                                        <TableCell > 
                                            <Button 
                                            variant="outlined" 
                                            size="small" 
                                            startIcon={<DeleteIcon />}
                                            onClick={()=>deleteUser(data._id)}> Delete</Button></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Grid>
        </>
    )
}

export default AdminDashboard