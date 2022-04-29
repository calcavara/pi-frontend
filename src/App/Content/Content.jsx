import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';

const ytContent = {
    'tipo-de-conteudo': 'youtube',
    'titulo': 'Equações de segundo grau',
    'descricao': 'Com esse vídeo, é possível entender todo o processo de resolução de equações de segundo grau utilizando Baskara.',
    'link': 'https://www.youtube.com/watch?v=toAaUBwitFE',
    'categoria': ''
}

const Content = () => {
    return (
        <Grid container spacing={2} fullWidth>
            <Grid item xs={12}>
                    <Typography variant="h5" component="h1" sx={{fontWeight: 'medium'}}>
                        {ytContent.titulo}
                    </Typography>
            </Grid>
            <Grid item xs={12} fullWidth>
                <Paper elevation={1} sx={{py: 2, width: '100vw', mx: -2}}>
                        <iframe width={window.innerWidth} height="315" src={`https://www.youtube.com/embed/${ytContent.link.slice(-11)}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                        <Typography variant="body2" component="p" fullWidth sx={{fontWeight: 'medium', px: 2, mt: 1}}>
                        {ytContent.descricao}
                    </Typography>
                </Paper>  
            </Grid>
        </Grid>
    );
};

export default Content;