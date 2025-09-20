import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FirebaseContext } from './Store/FirebaseContext.jsx'
import { app } from './Firebase/Config.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseContext.Provider value={{app}}>
      <App />
    </FirebaseContext.Provider>
  </StrictMode>,
)
