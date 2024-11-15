import React, { createContext, useState, useContext, useEffect } from "react";

// Create the Cart Context
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Retrieve initial value from local storage or fallback to an empty array
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [totalPrice, setTotalPrice] = useState(() => {
    // Retrieve initial value from local storage or fallback to zero
    const savedPrice = localStorage.getItem("totalPrice");
    return savedPrice ? parseFloat(savedPrice) : 0;
  });

  useEffect(() => {
    // Save cart items and total price in local storage whenever they change
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("totalPrice", totalPrice.toString());
  }, [cartItems, totalPrice]);

  const addToCart = (item) => {
    const itemExists = cartItems.some((cartItem) => cartItem.id === item.id);
    if (itemExists) {
      console.warn(`Item with id ${item.id} already in the cart.`);
      return;
    }

    const newTotalPrice = [...cartItems, item].reduce((acc, currentItem) => {
      if (
        currentItem.price_against_qty &&
        !isNaN(currentItem.price_against_qty)
      ) {
        return acc + currentItem.price_against_qty;
      }
      return acc;
    }, 0);

    setTotalPrice(newTotalPrice);
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const updateCart = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        const updatedItem = {
          ...updatedItems[existingItemIndex],
          item_qty: item.item_qty,
          price_against_qty: item.price_against_qty,
        };
        updatedItems[existingItemIndex] = updatedItem;

        const newTotalPrice = updatedItems.reduce((acc, currentItem) => {
          return acc + (currentItem.price_against_qty || 0);
        }, 0);

        setTotalPrice(newTotalPrice);
        return updatedItems;
      }

      return prevItems;
    });
  };

  const removeCart = (item) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );

    const newTotalPrice = updatedCartItems.reduce((acc, currentItem) => {
      if (
        currentItem.price_against_qty &&
        !isNaN(currentItem.price_against_qty)
      ) {
        return acc + currentItem.price_against_qty;
      }
      return acc;
    }, 0);

    setCartItems(updatedCartItems);
    setTotalPrice(newTotalPrice);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, totalPrice, removeCart, updateCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);
