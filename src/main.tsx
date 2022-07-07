import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { myTheme } from './styles/theme'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ChakraProvider theme={myTheme} resetCSS>
          <App />
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
