import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './context'
import { ColorModeScript } from '@chakra-ui/react'
import { myTheme } from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <ColorModeScript initialColorMode={myTheme.config.initialColorMode} />
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
)
