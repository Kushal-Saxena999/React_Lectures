
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// console.log(App);

createRoot(document.getElementById('root')).render(<App />)
console.log(typeof App);
