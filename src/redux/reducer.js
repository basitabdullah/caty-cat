import { createReducer } from "@reduxjs/toolkit";
 
export const cartReducer = createReducer({

    cartItems : [],
    subtotal : 0,
    shipping : 0,
    tax : 0,
    total : 0,
},{
addToCart : (state , action)=>{
    const item = action.payload
    console.log(item);
    const itemExist = state.cartItems.find((i)=> i.id === item.id)

    if(itemExist){
    state.cartItems.forEach(i=>{
        if(i.id === item.id){
            i.quantity +=1
        }
    })
    }
    else{
        state.cartItems.push(item)
    }       
}

})