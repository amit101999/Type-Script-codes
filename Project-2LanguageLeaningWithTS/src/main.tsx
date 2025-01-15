import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {ThemeProvider } from "@emotion/react"
import { createTheme, CssBaseline } from "@mui/material"

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(255 , 0, 0)"
    },
  }
})

createRoot(document.getElementById('root')!).render(

  <ThemeProvider theme={theme}>
    <CssBaseline />
  <App />
  </ThemeProvider>
 
)
