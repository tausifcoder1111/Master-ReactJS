

/**
 * 
 * Header
   Logo
   Nav Items
 
 * Body
    Search Bar
    Restaurant Card Container

 * Footer
    Copyrights
    Links
    Address
    Contact

 * 

 */


import Header from "./components/Header"
import './App.css'
import Body from "./components/Body"
import About from "./components/About"
import Contact from "./components/Contact"
import { Outlet } from "react-router-dom"
function App() {
  return (
    <>
    <Header/>
    {/* If path is / then need to show Body if /about then About page */}
    {

    }
    {/* <Body/> */}
   <Outlet />
    </>
  )
}
 
export default App
