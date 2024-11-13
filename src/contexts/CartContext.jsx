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
    console.log(newTotalPrice, item);
    setTotalPrice(newTotalPrice);
    setCartItems((prevItems) => [...prevItems, item]); // Add item to the cart
  };

  const updateCard = (item) => {
    console.log("🚀 ~ updateCard ~ item:", item)
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        // Update the existing item
        const updatedItems = [...prevItems];
        const updatedItem = {
          ...updatedItems[existingItemIndex],
          item_qty: item.item_qty,
          price_against_qty: item.price_against_qty,
        };
        updatedItems[existingItemIndex] = updatedItem;

        // Calculate the new total price
        const newTotalPrice = updatedItems.reduce((acc, currentItem) => {
          return acc + (currentItem.price_against_qty || 0);
        }, 0);

        setTotalPrice(newTotalPrice);
        return updatedItems;
      } else {
        // Add new item if not existing
        const newTotalPrice = [...prevItems, item].reduce(
          (acc, currentItem) => {
            return acc + (currentItem.price_against_qty || 0);
          },
          0
        );

        setTotalPrice(newTotalPrice);
        return [...prevItems, item];
      }
    });
  };

  const removeCart = (item) => {
    // Filter out the item to be removed
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id // assuming `id` uniquely identifies an item
    );

    // Calculate the new total price
    const newTotalPrice = updatedCartItems.reduce((acc, currentItem) => {
      if (
        currentItem.price_against_qty &&
        !isNaN(currentItem.price_against_qty)
      ) {
        return acc + currentItem.price_against_qty; // Sum up remaining items
      }
      return acc;
    }, 0);

    // Update state
    setCartItems(updatedCartItems);
    setTotalPrice(newTotalPrice);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, totalPrice, removeCart,updateCard }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);
