import Logo from "../assets/logo.jpg";
import { useState, useEffect,  } from "react";
const Header = () => {
  const[btnNameReact, setBtnNameReact] = useState("Login")

  console.log("Header Render")
  useEffect(()=>{
    console.log("useEffect called")
  },[])

  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={Logo} alt="logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li className="cart">Cart</li>
            <button
           className="filter-btn"
            onClick={()=>{
              btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
            }}
            >
              {btnNameReact}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
