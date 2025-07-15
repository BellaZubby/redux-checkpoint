import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './JS/store/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* the provider component from react-redux allows us (react app) access to the redux store and it accepts the prop store === the redux store created*/}
    <Provider store = {store}>
      <App/>
    </Provider>
  </StrictMode>,
)
