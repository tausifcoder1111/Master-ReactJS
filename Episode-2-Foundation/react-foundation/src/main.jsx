import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import About from './components/About'
import Contact from './components/Contact.jsx'

// React Element == Object == JSX
// const heading = <h1>JSX Heading</h1>
// console.log(heading)
 

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <App />
  },{
    path : "/about",
    element :<About />
  },
  {
    path:"/contact",
    element : <Contact/>
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}>
    <StrictMode>
    <App />
  </StrictMode>
  </RouterProvider>,
)
