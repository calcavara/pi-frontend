import React from 'react';
import { Paper, Button, Typography, Grid, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, TextField } from '@mui/material';

const SearchPage = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Paper elevation={3} sx={{p: 2}}>
                    <Typography variant="h4" component="h1" sx={{fontWeight: 'medium'}}>
                        Busque conhecimento
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper elevation={3} sx={{p: 2}}>
                    <FormControl component="fieldset" sx={{width: '100%'}}>
                        <FormLabel component="legend">Tipo de conhecimento</FormLabel>
                        <RadioGroup aria-label="tipo-conhecimento" name="tipo-conhecimento">
                            <FormControlLabel value="conteudo" control={<Radio />} label="Conteúdo" />
                            <FormControlLabel value="categoria" control={<Radio />} label="Categoria" />
                            <FormControlLabel value="trilha" control={<Radio />} label="Trilha" />
                        </RadioGroup>    
                    </FormControl>
                    <TextField
                        id="busca"
                        label="O que quer aprender hoje?"
                        multiline
                        fullWidth
                        maxRows={4}
                        sx={{ mt: 1 }}
                    />
                </Paper>
                <Button variant="contained" fullWidth sx={{mt: 4}}>Buscar</Button>
            </Grid>
        </Grid>
    );
};

export default SearchPage;