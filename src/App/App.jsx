import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Container, Box, AppBar, Toolbar, Typography, Paper, BottomNavigation, BottomNavigationAction, Menu, MenuItem } from '@mui/material';
import { Home, Create, Search } from '@mui/icons-material';

const App = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Box>
                        <Typography variant="h6" component="span">
                            SCIENTIA
                        </Typography>
                        <Typography variant="caption" display="block" component="span" sx={{mt: -1}}>
                            compartilhe conhecimento
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
            <Container sx={{ py: '72px' }}>
                <Outlet />
            </Container>            
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100 }} elevation={3}>
                <BottomNavigation
                    showLabels
                >
                    <BottomNavigationAction label="Início" icon={<Home />} />
                    <BottomNavigationAction label="Criar" icon={<Create />} onClick={handleClick}/>
                    <BottomNavigationAction label="Buscar" icon={<Link to="/app/search"><Search /></Link>} />
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <Link to="/app/new-content" style={{textDecoration: 'none'}}><MenuItem onClick={handleClose}>Conteúdo</MenuItem></Link>
                        <Link to="/app/new-category" style={{textDecoration: 'none'}}><MenuItem onClick={handleClose}>Categoria</MenuItem></Link>
                    </Menu>
                </BottomNavigation>
            </Paper>
        </>
    );
}

export default App;