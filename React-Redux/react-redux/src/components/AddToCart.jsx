import React from "react"
import { useSelector } from "react-redux"

function AddToCart() {

//   const cartItems = useSelector((state) => state.cart.items)
const selector = useSelector((state)=>state.cart.value)
console.log(selector)
  return (
    <div>
      <h3>🛒 Cart: {selector}</h3>
    </div>
  )
}

export default AddToCart