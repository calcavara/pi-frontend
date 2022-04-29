import React from 'react';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Box } from '@mui/material';
import { Card, CardContent } from '@mui/material';
import {Link} from 'react-router-dom';

const Login = () => {
    return (
        <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{height: '100%'}}>
            <Grid item md={6} sx={{display: {xs: 'none', md: 'block'}, height: '100%', bgcolor: 'secondary.main'}} />
            <Grid item xs={12} md={6} alignItems="center">
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h3" component="h1">
                                Bem vindo ao Scientia
                            </Typography>
                            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                <TextField id="username" label="Nome do usuário" variant="outlined" margin="normal" />
                                <TextField id="password" label="Senha" variant="outlined" margin="normal" />
                            </Box>
                            <Link to="/app/search" sx={{textDecoration: 'none !important'}}><Button variant="contained" size="large" sx={{display: 'block', mt: 2}}>Entrar</Button></Link>
                            <Box sx={{ mt: 4 }}>
                                <Button variant="text" size="small" sx={{ mr: 4}}>Esqueci minha senha</Button>
                                <Button variant="text" size="small">Criar nova conta</Button>
                            </Box>
                        </CardContent>
                    </Card>
            </Grid>
        </Grid>
    )
}

export default Login;