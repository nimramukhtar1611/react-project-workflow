// AppContext.js
import React, { createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
const [IsSidebarOpen, setSidebarOpen] = useState(false);
  const updateCart = (product, quantity) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.product._id === product._id);
      if (existingItemIndex !== -1) {
        // Update quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity = quantity;
        return updatedItems;
      } else {
        // Add new product
        return [...prevItems, { product, quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.product._id !== productId));
  };

  const clearCart = () => setCartItems([]);

  return (
   <AppContext.Provider
    value={{
      cartItems,
      updateCart,
      removeFromCart,
      clearCart,
      IsSidebarOpen,
      setSidebarOpen, 
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
