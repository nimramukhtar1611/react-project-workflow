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
const removeFromCart = (productId) => {
  setCartItem(prev => {
    if (!prev || !prev.product) return null;
    return prev.product._id === productId ? null : prev;
  });
};


  return (
    <AppContext.Provider value={{ cartItem, updateCart ,clearCart,removeFromCart}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext