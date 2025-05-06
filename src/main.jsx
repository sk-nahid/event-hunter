import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router.jsx'
import ContextProvider from './Context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>

    <RouterProvider router={router}></RouterProvider>
    </ContextProvider>
  </StrictMode>,
)
