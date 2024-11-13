import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardMedia,
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { ShoppingCart, Add, Remove } from "@mui/icons-material";

import { useCart } from "./contexts/CartContext";

function UserDetails() {
  const navigate = useNavigate();

  const { addToCart, cartItems, updateCard } = useCart();

  const { id } = useParams();
  const [item, setItem] = useState({
    description: `A delicious and spicy noodle dish with fresh vegetables and sauces.`,
    category_id: 1,
    id: 2,
    title: "Shrimp Pasta",
    price: 800,
    image: "https://backend.myhotel2cloud.com/upload/1673109140.jpg",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);
    if (!isItemInCart) {
      addToCart({
        item_qty: itemQty,
        price_against_qty: price,
        ...item,
      });
      navigate("/food_menu");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  // Mock user's name (replace with your dynamic data if needed)
  const userName = "Francis";

  return (
    <div style={{ position: "relative" }}>
      <Card
        style={{
          background: "#fff",
          marginBottom: 8,
          display: "flex",
          flexDirection: "column",
          boxShadow: "none",
          marginTop: 30,
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{
            background: "none",
            padding: "15px",
            borderRadius: "8px",
          }}
        >
          <CardMedia
            component="img"
            image={item.image}
            alt={item.title}
            style={{
              background: "none",
              borderRadius: 8,
              maxWidth: "100%",
              maxHeight: 150,
              objectFit: "contain",
            }}
          />
        </Box>
        {/* Add "Hello" text and user name */}
        <Typography
          style={{ marginTop: 30 }}
          variant="caption"
          align="center"
          color="textSecondary"
        >
          Hello
        </Typography>
        <Typography variant="body1" align="center" color="black">
          {userName}
        </Typography>

        <Typography
          variant="body2"
          align="center"
          color="textSecondary"
          style={{ marginTop: 30 }}
        >
          Enter the WhatsApp OTP sent to your mobile number
        </Typography>

        <Box style={{ margin: "20px" }}>
          <TextField
            label="Enter OTP"
            variant="outlined"
            fullWidth
            margin="dense" // Makes the input smaller vertically
            InputProps={{
              style: {
                borderRadius: 5, // Makes the corners rounded
                height: "50px", // Sets a specific height to make it smaller
              },
            }}
            style={{ textAlign: "center" }}
          />
        </Box>
        <Button
          style={{
            background: "#f96207",
            borderRadius: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 50px",
          }}
        >
          <Typography variant="body1" style={{ color: "#fff" }}>
            Verify OTP
          </Typography>
        </Button>
        <Typography variant="body1" align="center" color="red" marginTop={2}>
          Resend
        </Typography>
      </Card>
    </div>
  );
}

export default UserDetails;
