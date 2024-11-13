import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Typography, CardMedia, Box, Button, IconButton } from "@mui/material";
import { ShoppingCart, Add, Remove, Delete } from "@mui/icons-material";
import { useCart } from "./contexts/CartContext";

function App() {
  const { cartItems, totalPrice, removeCart } = useCart();
  const [cartList, setCartList] = useState([]);

  const handleRemoveToCart = (item) => {
    removeCart(item);
    setCartList(cartItems);
  };

  useEffect(() => {
    setCartList(cartItems);
  }, [cartItems]);

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
                maxWidth: 50, // Adjusts the image width
                maxHeight: 50,
                objectFit: "contain",
              }}
            />
            <Box display="flex" flexDirection="column">
              {" "}
              {/* Wraps title and price in a column */}
              <Typography variant="caption" color="textSecondary">
                {item.title}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {item.price}
              </Typography>
            </Box>
          </Box>
          {/* Quantity Button */}
          <Button
            variant="contained"
            style={{
              padding: "15px",
              maxWidth: "55px",
              background: "#f96207",
              borderRadius: "50px",
              height: "22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Remove style={{ fontSize: "12px", marginRight: "8px" }} />
            <Typography variant="body1" style={{ margin: "0 3px" }}>
              {item.item_qty}
            </Typography>
            <Add style={{ fontSize: "12px", marginLeft: "8px" }} />
          </Button>
          <IconButton onClick={() => handleRemoveToCart(item)}>
            <Delete style={{ color: "grey" }} />
          </IconButton>

          {/* <IconButton></IconButton> */}
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
          zIndex: 10, // Ensures it stays above other elements
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Adds a subtle shadow for depth
          borderRadius: "12px", // Rounded corners for a box-like feel
          border: "1px solid #e0e0e0", // Optional: Adds a light border for definition
          mx: "10px", // Centers the box horizontally within the page
        }}
      >
        <Box
          display={"flex"}
          flexWrap="wrap"
          justifyContent="space-between"
          gap={2}
          alignItems="center"
        >
          <Typography variant="h6">Total Price</Typography>
          <Typography variant="h6">{totalPrice}</Typography>
        </Box>

        <Box
          display={"flex"}
          flexWrap="wrap"
          justifyContent="space-between"
          gap={2}
          mt={2}
          mb={2}
          alignItems="center"
        >
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
