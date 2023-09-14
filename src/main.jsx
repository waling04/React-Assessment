import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import './App.css'
import './index.css'
//import router
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Owner from './components/Owner.jsx'
import User from './components/User.jsx'
import Admin from './components/Admin.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Owner',
    element: <Owner />
  },
  {
    path: '/User',
    element: <User />
  },
  {
    path: '/Admin',
    element: <Admin />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
