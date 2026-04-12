import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

import { ShopProvider } from "./features/context/ShopContext";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './shared/styles/app.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopProvider>
      <App />
    </ShopProvider>
  </StrictMode>,
)

