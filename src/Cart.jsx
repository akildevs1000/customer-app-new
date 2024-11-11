import React from "react";
import { Link } from "react-router-dom";

import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
  Button,
} from "@mui/material";
import { ShoppingCart, Add, Remove, Delete } from "@mui/icons-material";

const menuItems = [
  {
    description: `lorem`,
    category_id: 1,
    id: 1,
    title: "Spicy Noodles",
    price: "₹1,500.00",
    image:
      "https://img.freepik.com/premium-photo/circle-fruits-vegetables-with-clock-top_1274269-162495.jpg?w=740",
  },
  {
    description: `lorem`,
    category_id: 1,
    id: 2,
    title: "Shrimp Pasta",
    price: "₹800.00",
    image:
      "https://img.freepik.com/premium-photo/circle-food-with-picture-circle-fruits-vegetables_1274269-165445.jpg",
  },
  {
    description: `lorem`,
    category_id: 1,
    id: 3,
    title: "Vegetable Curry",
    price: "₹300.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoqv3doDpDLZX7dhxdmFBomPiYCfjrxVNLiTlsC5uXbuLm3P17XTNgOENlVlKLQx9mdg&usqp=CAU",
  },
];

function App() {
  return (
    <Box mt={7}>
      {menuItems.map((item, index) => (
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
              1
            </Typography>
            <Add style={{ fontSize: "12px", marginLeft: "8px" }} />
          </Button>

          <Delete style={{ color: "grey" }} />
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
          <Typography variant="h6">₹5555.00</Typography>
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
