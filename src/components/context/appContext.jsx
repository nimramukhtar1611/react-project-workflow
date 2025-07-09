import React from 'react'
import {createContext,useState} from 'react'

const AppContext = createContext()
export const AppProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(null);

  const updateCart = (product, quantity) => {
    setCartItem({ product, quantity });
  };
 const clearCart = () => {
    setCartItem(null); // 🧹 This clears the cart
  };

  return (
    <AppContext.Provider value={{ cartItem, updateCart ,clearCart}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext