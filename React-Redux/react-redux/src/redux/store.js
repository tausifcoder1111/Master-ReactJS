import {configureStore} from "@reduxjs/toolkit"
import cartReducer from './slice'

export const store = configureStore({
    reducer : {
        cart : cartReducer
    }
})


// configureStore creates the Redux Store
// reducer property tells redux how state should update