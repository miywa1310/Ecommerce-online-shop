import {  createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: [],
    totalAmount:null
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCartItem: (state, action) => {
            if (state.cart.find(item=>item.id==action.payload.id)) {
                state.cart = state.cart
            }else{
                state.cart.push(action.payload)
            }
        },
        deleteFromCart:(state, action)=>{
            state.cart=state.cart.filter(item=>item.id !== action.payload.id)
        },
        increment:(state, action)=>{
            const cartItem=state.cart.find(item=>item.id==action.payload.id)
            cartItem.amount=cartItem.amount+1
        },
        dicrement:(state, action)=>{
            const cartItem=state.cart.find(item=>item.id==action.payload.id)
            if(cartItem.amount!==1){
                cartItem.amount=cartItem.amount-1
            }
        },
        calculateTotalAmount:(state)=>{
            state.totalAmount = null
            state.cart.map(item=>{
                state.totalAmount += item.price * item.amount
            })
        }
    }
})
export const { setCartItem, deleteFromCart, increment, dicrement, calculateTotalAmount} = cartSlice.actions

export default cartSlice.reducer