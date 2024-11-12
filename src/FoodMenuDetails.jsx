import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  Box,
  Typography,
  Button,
  CardContent,
  IconButton,
  Badge,
} from "@mui/material";
import { ShoppingCart, Add, Remove } from "@mui/icons-material";

import { useCart } from "./contexts/CartContext";

const menuItems = [
  {
    description: `A delicious and spicy noodle dish with fresh vegetables and sauces.`,
    category_id: 1,
    id: 1,
    title: "Spicy Noodles",
    price: 1500,
    image:
      "https://img.freepik.com/premium-photo/circle-fruits-vegetables-with-clock-top_1274269-162495.jpg?w=740",
  },
  {
    description: `A delicious and spicy noodle dish with fresh vegetables and sauces.`,
    category_id: 1,
    id: 2,
    title: "Shrimp Pasta",
    price: 800,
    image:
      "https://img.freepik.com/premium-photo/circle-food-with-picture-circle-fruits-vegetables_1274269-165445.jpg",
  },
  {
    description: `A delicious and spicy noodle dish with fresh vegetables and sauces.`,
    category_id: 1,
    id: 3,
    title: "Vegetable Curry",
    price: 300,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoqv3doDpDLZX7dhxdmFBomPiYCfjrxVNLiTlsC5uXbuLm3P17XTNgOENlVlKLQx9mdg&usqp=CAU",
  },
  {
    description: `A delicious and spicy noodle dish with fresh vegetables and sauces.`,
    category_id: 1,
    id: 4,
    title: "Mixed Salad",
    price: 100,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRzBPWBLfvfpEQytdUQ6JYA8hTxk_be-9xgUbjUXrcQPKuDcnGDhSR1JaJw1plQ2srI7Q&usqp=CAU",
  },
];

function UserDetails() {
  const { addToCart, cartItems, totalPrice } = useCart();

  const [itemQty, setItemQty] = useState(1);
  const [price, setPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0); // Total items in cart

  // Function to handle incrementing the itemQty
  const multiplePrice = (itemPrice, action) => {
    let itemQtyCounter = action === "ADD" ? itemQty + 1 : itemQty - 1;
    if (itemQtyCounter > 0) {
      setItemQty(itemQtyCounter);
      setPrice(itemPrice * itemQtyCounter);
    }
  };

  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let MyItem = menuItems.find((e) => e.id === parseInt(id));
    setItem(MyItem);
    setPrice(MyItem && MyItem.price);

    setLoading(false);
  }, [id]);

  const handleAddToCart = () => {
    const isItemInCart = cartItems.some(
      (cartItem) => cartItem.id === item.id
    );

    if (!isItemInCart) {
      addToCart({
        item_qty: itemQty,
        price_against_qty: price,
        ...item,
      });
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

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
        {/* Check if item exists */}
        {item ? (
          <>
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
                  maxHeight: 200,
                  objectFit: "contain",
                }}
              />
            </Box>

            {/* Title, Price, and Add to Cart Button */}
            <Box
              style={{
                marginTop: 50,
              }}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">{item.title}</Typography>
              <Box
                variant="contained"
                style={{
                  color: "#fff",
                  background: "#f96207",
                  borderRadius: "50px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconButton
                  style={{
                    color: "#fff",
                  }}
                  onClick={() => multiplePrice(item.price, "MINUS")}
                >
                  <Remove style={{ fontSize: "14px" }} />
                </IconButton>
                <Typography variant="body1" style={{ margin: "0 3px" }}>
                  {itemQty}
                </Typography>
                <IconButton
                  style={{
                    color: "#fff",
                  }}
                  onClick={() => multiplePrice(item.price, "ADD")}
                >
                  <Add style={{ fontSize: "14px" }} />
                </IconButton>
              </Box>
            </Box>

            <Box display="flex" justifyContent="space-between">
              <Typography variant="body1" color="textSecondary">
                {item.price}
              </Typography>
            </Box>

            <Box style={{ marginTop: 25 }}>
              <Typography variant="h6">Description</Typography>
              <Typography
                style={{ paddingTop: 10 }}
                variant="body1"
                color="textSecondary"
              >
                {item.description}
              </Typography>
            </Box>

            {/* Cart Controls */}
            <Box
              display={"flex"}
              flexWrap="wrap"
              justifyContent="space-between"
              gap={2}
              alignItems="center"
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
              <Typography variant="h6">Total {totalPrice}</Typography>
              <Button
                variant="contained"
                style={{
                  background: "#f96207",
                  borderRadius: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={handleAddToCart}
              >
                <ShoppingCart
                  style={{ fontSize: "14px", marginRight: "8px" }}
                />
                <Typography variant="body1" style={{ margin: "0 3px" }}>
                  Add To Cart
                </Typography>
              </Button>
            </Box>
          </>
        ) : (
          // Display the "Not Found" section if item is not found
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              padding: "30px",
            }}
          >
            <Typography variant="h6" color="textSecondary">
              Item Not Found
            </Typography>
          </Box>
        )}
      </Card>
    </div>
  );
}

export default UserDetails;
