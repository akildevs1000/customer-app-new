import React, { createContext, useState, useContext } from "react";

// Create the Cart Context
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item) => {
    // Calculate the new total price by summing the price_against_qty of all cart items
    const newTotalPrice = [...cartItems, item].reduce((acc, currentItem) => {
      if (
        currentItem.price_against_qty &&
        !isNaN(currentItem.price_against_qty)
      ) {
        return acc + currentItem.price_against_qty; // Add the price of each item
      }
      return acc;
    }, 0);
    console.log(newTotalPrice,item);
    setTotalPrice(newTotalPrice);
    setCartItems((prevItems) => [...prevItems, item]); // Add item to the cart
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart,totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);
