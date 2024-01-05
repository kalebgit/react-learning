import {createContext, useState, useReducer} from 'react'
import { DUMMY_PRODUCTS } from '../dummy-products';

export const CartContext = createContext({
    items: [],
    addItemToCart: ()=>{},
    updateItemQty: ()=>{}
    
});

function shoppingCartReducer(state, action){
    const {type, payload} = action;
    let updatedItems
    switch(type){
        case "ADD_ITEM":
            updatedItems = [...state.items];
    
            const existingCartItemIndex = updatedItems.findIndex(
                (cartItem) => cartItem.id === payload
            );
            const existingCartItem = updatedItems[existingCartItemIndex];
        
            if (existingCartItem) {
                const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + 1,
                };
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                const product = DUMMY_PRODUCTS.find((product) => product.id === payload);
                updatedItems.push({
                id: payload,
                name: product.title,
                price: product.price,
                quantity: 1,
                });
            }
        
            return {
                ...state,
                items: updatedItems,
            };
            break;
        case "UPDATE_ITEM": 
            updatedItem = [...state.items];
            const updatedItemIndex = updatedItems.findIndex(
            (item) => item.id === payload.id
            );
    
            const updatedItem = {
            ...updatedItems[updatedItemIndex],
            };
    
            updatedItem.quantity += payload.amount;
    
            if (updatedItem.quantity <= 0) {
            updatedItems.splice(updatedItemIndex, 1);
            } else {
            updatedItems[updatedItemIndex] = updatedItem;
            }
    
            return {
                ...state, 
                items: updatedItems,
            };
    }
    return state;
}

export default function CartContextProvider({children}){

    const [shoppingCartState, shoppingCartDispatch] = useReducer(
        shoppingCartReducer,
        {
            items: [],
        }, 

        );

        // NOW USING USE REDUCER
    // const [shoppingCart, setShoppingCart] = useState({
    //     items: [],
    //   });
    
      function handleAddItemToCart(id) {
        //action parameter is passed
        shoppingCartDispatch({
            type: 'ADD_ITEM',
            payload: id
        });

        // setShoppingCart((prevShoppingCart) => {
        //   const updatedItems = [...prevShoppingCart.items];
    
        //   const existingCartItemIndex = updatedItems.findIndex(
        //     (cartItem) => cartItem.id === id
        //   );
        //   const existingCartItem = updatedItems[existingCartItemIndex];
    
        //   if (existingCartItem) {
        //     const updatedItem = {
        //       ...existingCartItem,
        //       quantity: existingCartItem.quantity + 1,
        //     };
        //     updatedItems[existingCartItemIndex] = updatedItem;
        //   } else {
        //     const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        //     updatedItems.push({
        //       id: id,
        //       name: product.title,
        //       price: product.price,
        //       quantity: 1,
        //     });
        //   }
    
        //   return {
        //     items: updatedItems,
        //   };
        // });
      }
    
      function handleUpdateCartItemQuantity(productId, amount) {

        shoppingCartDispatch({
            type: "UPDATE_ITEM",
            payload: {id: productId, amount: amount}
        })

        // setShoppingCart((prevShoppingCart) => {
        //   const updatedItems = [...prevShoppingCart.items];
        //   const updatedItemIndex = updatedItems.findIndex(
        //     (item) => item.id === productId
        //   );
    
        //   const updatedItem = {
        //     ...updatedItems[updatedItemIndex],
        //   };
    
        //   updatedItem.quantity += amount;
    
        //   if (updatedItem.quantity <= 0) {
        //     updatedItems.splice(updatedItemIndex, 1);
        //   } else {
        //     updatedItems[updatedItemIndex] = updatedItem;
        //   }
    
        //   return {
        //     items: updatedItems,
        //   };
        // });
      }
    
      const ContextValue = {
        items: shoppingCartState.items,
        addItemToCart: handleAddItemToCart,
        updateItemQty: handleUpdateCartItemQuantity
      }
    return (<CartContext.Provider value={ContextValue}>{children}</CartContext.Provider>)
}


