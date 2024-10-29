import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './Router.tsx'
import { ThemeContextProvider } from './components/theme/ThemeContextProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
    <Router /> 
    </ThemeContextProvider>
 </React.StrictMode>,
)
