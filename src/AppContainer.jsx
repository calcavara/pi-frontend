import React from 'react';
import { grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import { Routes, Route } from 'react-router-dom';

import Login from './Login/Login';
import App from './App/App';
import Home from './App/Home/Home';
import SearchPage from './App/SearchPage/SearchPage';
import NewContent from './App/NewContent/NewContent';
import NewCategory from './App/NewCategory/NewCategory';
import EditContent from './App/EditContent/EditContent';
import EditCategory from './App/EditCategory/EditCategory';
import Content from './App/Content/Content';

const AppContainer = () => {
    return (
        <Box sx={{bgcolor: grey[50], height: '100vh'}}>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="app" element={<App />}>
                    <Route path="home" element={<Home />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="new-content" element={<NewContent />} />
                    <Route path="new-category" element={<NewCategory />} />
                    <Route path="edit-content" element={<EditContent />} />
                    <Route path="edit-category" element={<EditCategory />} />
                    <Route path="content" element={<Content />} />
                </Route>
            </Routes>
        </Box>
    )
};

export default AppContainer;