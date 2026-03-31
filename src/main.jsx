/**
 * Application bootstrap.
 * Loads the global SCSS bundle, mounts the React tree, and enables Helmet support.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.scss'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
