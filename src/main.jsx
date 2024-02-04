import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { NoteCotextProvider } from './notecontext/NoteContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NoteCotextProvider>
    <App />
    </NoteCotextProvider>
  </React.StrictMode>,
)
