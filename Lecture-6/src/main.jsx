import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Uncontrolled from './Uncontrolled.jsx'

createRoot(document.getElementById('root')).render(<App />)