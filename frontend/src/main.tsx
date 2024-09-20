import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Footer} from '@organisms/footer/Footer';
import Theme from '@styles/Theme';
import {ThemeProvider} from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <ThemeProvider theme={Theme}>
      <Footer></Footer>
    </ThemeProvider>
  </React.StrictMode>,
)
