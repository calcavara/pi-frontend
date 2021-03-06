import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import AppContainer from './AppContainer';

render (
    <>
        <CssBaseline />
        <BrowserRouter>
            <AppContainer /> 
        </BrowserRouter>
    </>,
    document.getElementById('root')
);