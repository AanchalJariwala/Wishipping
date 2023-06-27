import React from "react";

const CartContext=React.createContext(
    {
        products:[],
        items:[],
        totalAmount:0,
        addItem :(item)=>{},
        removeItem:(id)=>{},
        clearCart:()=>{},
        fetchProducts:()=>{} 
    }
)
export default CartContext;
