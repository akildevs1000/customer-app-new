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

  const removeCart = (item) => {
    // Filter out the item to be removed
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id // assuming `id` uniquely identifies an item
    );
  
    // Calculate the new total price
    const newTotalPrice = updatedCartItems.reduce((acc, currentItem) => {
      if (currentItem.price_against_qty && !isNaN(currentItem.price_against_qty)) {
        return acc + currentItem.price_against_qty; // Sum up remaining items
      }
      return acc;
    }, 0);
  
    // Update state
    setCartItems(updatedCartItems);
    setTotalPrice(newTotalPrice);
  };
  
  return (
    <CartContext.Provider value={{ cartItems, addToCart,totalPrice,removeCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);
