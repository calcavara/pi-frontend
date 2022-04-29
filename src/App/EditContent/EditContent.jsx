import React from 'react';
import { Paper, Button, Typography, Grid, FormControl, InputLabel, TextField, Select, MenuItem } from '@mui/material';

const EditContent = () => {
    return (
        <Grid container spacing={2} fullWidth>
            <Grid item xs={12}>
                    <Typography variant="h4" component="h1" sx={{fontWeight: 'medium'}}>
                        Edite esse conhecimento
                    </Typography>
            </Grid>
            <Grid item xs={12} fullWidth>                
                <Paper elevation={3} sx={{p: 2}}>
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="tipo-de-conteudo-label">Tipo de conteúdo</InputLabel>
                        <Select
                            labelId="tipo-de-conteudo-label"
                            id="tipo-de-conteudo"
                            fullWidth
                            label="Tipo de conteúdo"                            
                        >                            
                            <MenuItem value="youtube">YouTube</MenuItem>
                            <MenuItem value="pagina">Página externa</MenuItem>
                            <MenuItem value="documento">Documento externo</MenuItem>
                            <MenuItem value="video">Vídeo (não YouTube)</MenuItem>
                        </Select>
                    </FormControl>                                        
                    <TextField
                        id="titulo"
                        label="Título"
                        fullWidth
                        placeholder="Título do conhecimento"
                        margin="normal"
                    />
                    <TextField
                        id="descricao"
                        label="Descrição"
                        multiline
                        rows={5}
                        fullWidth
                        placeholder="Descreva o conhecimento que será compartilhado"
                        margin="normal"
                    />
                    <TextField
                        id="link"
                        label="Link para o conteúdo"
                        fullWidth
                        placeholder="ex: https://google.com.br"
                        margin="normal"
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="categoria-label">Categoria</InputLabel>
                        <Select
                            labelId="categoria-label"
                            id="categoria"
                            fullWidth
                            label="Categoria"                            
                        >                            
                            <MenuItem value="cat1">Categoria 1</MenuItem>
                            <MenuItem value="cat2">Categoria 2</MenuItem>
                            <MenuItem value="cat3">Categoria 3</MenuItem>
                            <MenuItem value="cat4">Categoria 4</MenuItem>
                        </Select>
                    </FormControl> 
                </Paper>
                <Button variant="contained" sx={{mt: 4}} fullWidth>Editar</Button>                
            </Grid>
        </Grid>
    );
};

export default EditContent;