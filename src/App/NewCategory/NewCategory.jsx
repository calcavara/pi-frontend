import React from 'react';
import { Paper, Button, Typography, Grid, TextField } from '@mui/material';

const NewCategory = () => {
    return (
        <Grid container spacing={2} fullWidth>
            <Grid item xs={12}>
                    <Typography variant="h4" component="h1" sx={{fontWeight: 'medium'}}>
                        Crie uma nova categoria
                    </Typography>
            </Grid>
            <Grid item xs={12} fullWidth>                
                <Paper elevation={3} sx={{p: 2}}>                                       
                    <TextField
                        id="titulo"
                        label="Título da categoria"
                        fullWidth
                        placeholder="Título da categoria"
                        margin="normal"
                    />
                    <TextField
                        id="descricao"
                        label="Descrição"
                        multiline
                        rows={5}
                        fullWidth
                        placeholder="Descreva o tipo de conhecimento da categoria"
                        margin="normal"
                    />
                </Paper>                                
            </Grid>
            <Grid item xs={12} fullWidth>
                <Button variant="contained" sx={{mt: 4}} fullWidth>Criar</Button>
            </Grid>
        </Grid>
    );
};

export default NewCategory;