import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Footer} from '@organisms/footer/Footer';
import Theme from '@styles/Theme';
import {CssBaseline, ThemeProvider} from '@mui/material'
import '@fontsource/inter'; 
import '@fontsource/poppins'; 

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={Theme}>
      <App />
      <Footer></Footer>
    </ThemeProvider>
  </React.StrictMode>,
)
