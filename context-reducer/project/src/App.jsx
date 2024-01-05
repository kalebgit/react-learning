import { useState } from 'react';

import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';

//using only the context 
// import { CartContext } from './store/shopping-cart-context.jsx';

//using the provider
import CartContextProvider from './store/shopping-cart-context.jsx';

function App() {
  
  return (
    <CartContextProvider> 
      <Header/>
      <Shop />
    </CartContextProvider>
      
    
  );
}

export default App;
