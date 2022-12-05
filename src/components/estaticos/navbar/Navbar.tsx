import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import './Navbar.css'
import useLocalStorage from 'react-use-localstorage';
import { Link, useNavigate } from 'react-router-dom';



function Navbar(){
    const [token, setToken] = useLocalStorage('token')
    let navigate = useNavigate()

    function goLogout() {
        setToken('')
        alert("Usuario deslogado com sucesso!")
        navigate('/login')
    }
    return(
        <>
        <AppBar position="static">
                <Toolbar className='g1' variant="dense">
                    <Box className='cursor b1' >
                        <Typography variant="h5" color="inherit">
                          <Box >  BlogPessoal</Box>
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Link to='home' className='text-decorator-none'>
                        <Box mx={1} className='cursor b1'>
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='postagens' className='text-decorator-none'>
                        <Box mx={1} className='cursor b1'>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='temas' className='text-decorator-none'>
                        <Box mx={1} className='cursor b1'>
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='cadastrar tema' className='text-decorator-none'>
                        <Box mx={1} className='cursor b1'>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                        </Link>
                        <Box mx={1} className='cursor b1' onClick={goLogout}>
                            <Typography variant="h6" color="inherit">
                                logout
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    );
}
export default Navbar;
