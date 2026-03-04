import React from 'react'
import {useRouteError} from "react-router-dom"
function ErrorComponent() {
    const err = useRouteError();
    console.log(err)
  return (
   <>
   {
        <h3>{err?.data}</h3>
   }
   
   </>
  )
}

export default ErrorComponent