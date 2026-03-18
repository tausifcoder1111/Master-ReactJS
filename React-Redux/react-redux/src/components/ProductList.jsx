import React from "react"
import { useDispatch } from "react-redux"
// import { addToCart } from "../features/cart/cartSlice"
import { addItem } from "../redux/slice"
import AddToCart from "./AddToCart"

function ProductList() {

  const dispatch = useDispatch()

  const products = [
    { id: 1, name: "Headphones", price: 2999 },
    { id: 2, name: "Laptop", price: 55000 },
    { id: 3, name: "Keyboard", price: 1999 }
  ]

  return (
    <div style={{ padding: "20px" }}>

      <h2>Products</h2>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            margin: "10px 0"
          }}
        >
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>

          <button
            // onClick={() => dispatch(addToCart(product))}
            onClick={()=>{
                dispatch(addItem(1))
            }}
            style={{
              background: "#ff9f00",
              border: "none",
              padding: "10px",
              color: "white",
              cursor: "pointer"
            }}
          >
            Add to Cart
          </button>

        </div>
      ))}

    </div>
  )
}

export default ProductList