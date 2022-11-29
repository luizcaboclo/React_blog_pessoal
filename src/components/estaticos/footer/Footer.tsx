import { Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css'



function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='textos'>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.bing.com/images/search?view=detailV2&ccid=LhL%2bbLYl&id=B34B3A36D16B6A10C156A458BCE4190550A94B40&thid=OIP.LhL-bLYlFFjb4VkpoKDgsgHaHa&mediaurl=https%3a%2f%2fwww.lechateaudoleron.fr%2fwp-content%2fuploads%2f2020%2f05%2ffacebooklogo.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.2e12fe6cb6251458dbe15929a0a0e0b2%3frik%3dQEupUAUZ5LxYpA%26pid%3dImgRaw%26r%3d0&exph=800&expw=800&q=faceboo&simid=608025326493449721&FORM=IRPRST&ck=0F3D1A910E170D1086C36E206862C45C&selectedIndex=7&ajaxhist=0&ajaxserp=0" target="_blank">
                                <FacebookIcon className='redes' />
                            </a>
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                <InstagramIcon className='redes' />
                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                <LinkedInIcon className='redes' />
                            </a>
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos' >© 2020 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom className='textos' align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}
export default Footer;