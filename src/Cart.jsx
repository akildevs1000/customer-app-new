import React, { useEffect, useState } from "react";
import { Typography, CardMedia, Box, IconButton, Button } from "@mui/material";
import { ShoppingCart, Add, Remove, Delete } from "@mui/icons-material";
import { useCart } from "./contexts/CartContext";

function App() {
  const { cartItems, totalPrice, removeCart } = useCart(); // Context functions
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    setCartList(cartItems);
  }, [cartItems]);

  const handleRemoveToCart = (item) => {
    removeCart(item);
  };

  const handleIncreaseQuantity = (item) => {
    const updatedItems = cartList.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, item_qty: cartItem.item_qty + 1 } : cartItem
    );
    setCartList(updatedItems);
  };

  const handleDecreaseQuantity = (item) => {
    if (item.item_qty > 1) {
      const updatedItems = cartList.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, item_qty: cartItem.item_qty - 1 } : cartItem
      );
      setCartList(updatedItems);
    }
  };

  return (
    <Box mt={7}>
      {cartList.map((item, index) => (
        <Box
          key={index}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
          mt={2}
          sx={{
            backgroundColor: "white",
            p: 2,
            zIndex: 10,
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "12px",
            border: "1px solid #e0e0e0",
            mx: "10px",
          }}
        >
          {/* Image and Text Container */}
          <Box display="flex" alignItems="center" gap={2} flex="1">
            <CardMedia
              component="img"
              image={item.image}
              alt={item.title}
              style={{
                borderRadius: 8,
                maxWidth: 50,
                maxHeight: 50,
                objectFit: "contain",
              }}
            />
            <Box display="flex" flexDirection="column">
              <Typography variant="caption" color="textSecondary">
                {item.title}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {item.price}
              </Typography>
            </Box>
          </Box>
          {/* Quantity Adjustment Buttons */}
          <Box
            display="flex"
            alignItems="center"
            style={{
              padding: "8px",
              maxWidth: "120px",
              background: "#f96207",
              borderRadius: "50px",
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              onClick={() => handleDecreaseQuantity(item)}
              size="small"
              style={{ color: "white" }}
            >
              <Remove style={{ fontSize: "12px" }} />
            </IconButton>
            <Typography variant="body1" style={{ color: "white", margin: "0 8px" }}>
              {item.item_qty}
            </Typography>
            <IconButton
              onClick={() => handleIncreaseQuantity(item)}
              size="small"
              style={{ color: "white" }}
            >
              <Add style={{ fontSize: "12px" }} />
            </IconButton>
          </Box>
          <IconButton onClick={() => handleRemoveToCart(item)}>
            <Delete style={{ color: "grey" }} />
          </IconButton>
        </Box>
      ))}
      <Box
        sx={{
          position: "fixed",
          bottom: 60,
          left: 5,
          right: 5,
          backgroundColor: "white",
          p: 2,
          zIndex: 10,
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "12px",
          border: "1px solid #e0e0e0",
          mx: "10px",
        }}
      >
        <Box display={"flex"} justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Total Price</Typography>
          <Typography variant="h6">
            {/* Calculate total price based on cartList */}
            {cartList.reduce((total, item) => total + item.price * item.item_qty, 0)}
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent="center" mt={2} mb={2} alignItems="center">
          <Button
            variant="contained"
            style={{
              width: "80%",
              margin: "auto",
              background: "#f96207",
              borderRadius: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ShoppingCart style={{ fontSize: "18px", marginRight: "8px" }} />
            <Typography variant="body1" style={{ margin: "0 3px" }}>
              Submit
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
