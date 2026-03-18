import React from "react"
import AddToCart from "./AddToCart"
// import { useSelector } from "react-redux"

function Header() {

//   const cartItems = useSelector((state) => state.cart.items)

  return (
    <div style={{
      background: "#2874f0",
      color: "white",
      padding: "15px",
      display: "flex",
      justifyContent: "space-between"
    }}>

      <h2>FlipShop</h2>

      {/* <h3>🛒 Cart: {cartItems.length}</h3> */}
      {/* <h3>🛒 Cart: </h3> */}
      <AddToCart/>

    </div>
  )
}

export default Header