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
} from "@mui/material";
import { ShoppingCart, Add, Remove } from "@mui/icons-material";
import { counter } from "@fortawesome/fontawesome-svg-core";

const menuItems = [
  {
    description: `A delicious and spicy noodle dish with fresh vegetables and sauces.A delicious and spicy noodle dish with fresh vegetables and sauces.`,
    category_id: 1,
    id: 1,
    title: "Spicy Noodles",
    price: 1500,
    image:
      "https://img.freepik.com/premium-photo/circle-fruits-vegetables-with-clock-top_1274269-162495.jpg?w=740",
  },
  {
    description: `A delicious and spicy noodle dish with fresh vegetables and sauces.A delicious and spicy noodle dish with fresh vegetables and sauces.`,
    category_id: 1,
    id: 2,
    title: "Shrimp Pasta",
    price: 800,
    image:
      "https://img.freepik.com/premium-photo/circle-food-with-picture-circle-fruits-vegetables_1274269-165445.jpg",
  },
  {
    description: `A delicious and spicy noodle dish with fresh vegetables and sauces.A delicious and spicy noodle dish with fresh vegetables and sauces.`,
    category_id: 1,
    id: 3,
    title: "Vegetable Curry",
    price: 300,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoqv3doDpDLZX7dhxdmFBomPiYCfjrxVNLiTlsC5uXbuLm3P17XTNgOENlVlKLQx9mdg&usqp=CAU",
  },
  {
    description: `A delicious and spicy noodle dish with fresh vegetables and sauces.A delicious and spicy noodle dish with fresh vegetables and sauces.`,
    category_id: 1,
    id: 4,
    title: "Mixed Salad",
    price: 100,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRzBPWBLfvfpEQytdUQ6JYA8hTxk_be-9xgUbjUXrcQPKuDcnGDhSR1JaJw1plQ2srI7Q&usqp=CAU",
  },
  {
    description: `A delicious and spicy noodle dish with fresh vegetables and sauces.A delicious and spicy noodle dish with fresh vegetables and sauces.`,
    category_id: 1,
    id: 5,
    title: "Chicken Pasta Salad",
    price: 700,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFn2dkLKkDUxBtrUdN54y16sZCWcCb1wOWlw&s",
  },
  {
    description: `A delicious and spicy noodle dish with fresh vegetables and sauces.A delicious and spicy noodle dish with fresh vegetables and sauces.`,
    category_id: 1,
    id: 6,
    title: "Beef Salad",
    price: 300,
    image:
      "https://www.shutterstock.com/shutterstock/photos/688465564/display_1500/stock-vector-set-of-fast-food-icons-in-circle-shape-vector-illustration-for-your-cute-design-688465564.jpg",
  },

  {
    description: `A delicious and spicy noodle dish with fresh vegetables and sauces.A delicious and spicy noodle dish with fresh vegetables and sauces.`,
    category_id: 2,
    id: 1,
    title: "Spicy Noodles",
    price: 1500,
    image:
      "https://img.freepik.com/premium-photo/circle-fruits-vegetables-with-clock-top_1274269-162495.jpg?w=740",
  },
  {
    description: `A delicious and spicy noodle dish with fresh vegetables and sauces.A delicious and spicy noodle dish with fresh vegetables and sauces.`,
    category_id: 2,
    id: 2,
    title: "Shrimp Pasta",
    price: 800,
    image:
      "https://img.freepik.com/premium-photo/circle-food-with-picture-circle-fruits-vegetables_1274269-165445.jpg",
  },
  {
    description: `A delicious and spicy noodle dish with fresh vegetables and sauces.A delicious and spicy noodle dish with fresh vegetables and sauces.`,
    category_id: 2,
    id: 3,
    title: "Vegetable Curry",
    price: 300,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoqv3doDpDLZX7dhxdmFBomPiYCfjrxVNLiTlsC5uXbuLm3P17XTNgOENlVlKLQx9mdg&usqp=CAU",
  },
  {
    description: `A delicious and spicy noodle dish with fresh vegetables and sauces.A delicious and spicy noodle dish with fresh vegetables and sauces.`,
    category_id: 3,
    id: 1,
    title: "Spicy Noodles",
    price: 1500,
    image:
      "https://img.freepik.com/premium-photo/circle-fruits-vegetables-with-clock-top_1274269-162495.jpg?w=740",
  },
  {
    description: `A delicious and spicy noodle dish with fresh vegetables and sauces.A delicious and spicy noodle dish with fresh vegetables and sauces.`,
    category_id: 3,
    id: 2,
    title: "Shrimp Pasta",
    price: 800,
    image:
      "https://img.freepik.com/premium-photo/circle-food-with-picture-circle-fruits-vegetables_1274269-165445.jpg",
  },
  {
    description: `A delicious and spicy noodle dish with fresh vegetables and sauces.A delicious and spicy noodle dish with fresh vegetables and sauces.`,
    category_id: 3,
    id: 3,
    title: "Vegetable Curry",
    price: 300,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoqv3doDpDLZX7dhxdmFBomPiYCfjrxVNLiTlsC5uXbuLm3P17XTNgOENlVlKLQx9mdg&usqp=CAU",
  },
  {
    description: `A delicious and spicy noodle dish with fresh vegetables and sauces.A delicious and spicy noodle dish with fresh vegetables and sauces.`,
    category_id: 3,
    id: 6,
    title: "Beef Salad",
    price: 300,
    image:
      "https://www.shutterstock.com/shutterstock/photos/688465564/display_1500/stock-vector-set-of-fast-food-icons-in-circle-shape-vector-illustration-for-your-cute-design-688465564.jpg",
  },
];

const recommendedItems = [
  {
    category_id: 1,
    id: 1,
    title: "Spicy Noodles",
    price: 1500,
    image:
      "https://img.freepik.com/premium-photo/circle-fruits-vegetables-with-clock-top_1274269-162495.jpg?w=740",
  },
  {
    category_id: 1,
    id: 2,
    title: "Shrimp Pasta",
    price: 800,
    image:
      "https://img.freepik.com/premium-photo/circle-food-with-picture-circle-fruits-vegetables_1274269-165445.jpg",
  },
  {
    category_id: 1,
    id: 3,
    title: "Vegetable Curry",
    price: 300,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoqv3doDpDLZX7dhxdmFBomPiYCfjrxVNLiTlsC5uXbuLm3P17XTNgOENlVlKLQx9mdg&usqp=CAU",
  },
  {
    category_id: 1,
    id: 4,
    title: "Mixed Salad",
    price: 100,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRzBPWBLfvfpEQytdUQ6JYA8hTxk_be-9xgUbjUXrcQPKuDcnGDhSR1JaJw1plQ2srI7Q&usqp=CAU",
  },
];

function UserDetails() {
  const [counter, setCounter] = useState(1);
  const [price, setPrice] = useState(1500);

  // Function to handle incrementing the counter
  const multiplePrice = (itemPrice) => {
    setCounter(counter + 1);
    console.log(itemPrice);
    
    setPrice(itemPrice * (counter + 1)); // Update the price based on the new counter
  };

  const { id } = useParams();
  let [item, setItem] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const { id } = useParams();
    setItem(menuItems.find((e) => e.id == id));
    setLoading(false);
  }, []);

  //   useEffect(() => {
  //     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error("Network response was not ok");
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setUser(data);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         setError(error.message);
  //         setLoading(false);
  //       });
  //   },[]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Card
      style={{
        background: "#fff", // Light gray background color
        marginBottom: 8,
        display: "flex", // Enables Flexbox for centering
        flexDirection: "column", // Stacks children vertically
        boxShadow: "none", // No shadow
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
            maxWidth: "100%", // Ensures the image doesn't exceed the box width
            maxHeight: 200, // Sets the maximum height for the image
            objectFit: "contain", // Maintains aspect ratio while fitting the box
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
        <Button
          variant="contained"
          style={{
            background: "#f96207",
            borderRadius: "50px",
            height: "30px",
            display: "flex",
            alignItems: "center", // Center the content vertically
            justifyContent: "center", // Center the content horizontally
          }}
        >
          <IconButton
            style={{
              color: "#fff",
            }}
            onClick={() => multiplePrice(item.price)}
          >
            <Remove style={{ fontSize: "14px", marginRight: "8px" }} />{" "}
          </IconButton>
          {/* Reduced icon size and added spacing */}
          <Typography variant="body1" style={{ margin: "0 3px" }}>
            1
          </Typography>{" "}
          {/* Adjusted spacing for text */}
          <IconButton
            style={{
              color: "#fff",
            }}
            onClick={() => multiplePrice(item.price)}
          >
            <Add style={{ fontSize: "14px" }} />
          </IconButton>
          {/* Reduced icon size and added spacing */}
        </Button>
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

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        gap={2}
        mt={5} // Reduced top margin for less space above the Box
      >
        <Typography variant="h6">Recommended for you</Typography>

        {recommendedItems.map((item, index) => (
          <Card
            key={index}
            style={{
              width: "calc(50% - 8px)",
              marginBottom: 8,
              display: "flex", // Enables Flexbox for centering
              flexDirection: "column", // Stacks children vertically
              justifyContent: "center", // Vertically centers content
              alignItems: "center", // Horizontally centers content
              textAlign: "center", // Ensures text is centered
            }}
          >
            <Box display="flex" justifyContent="center" alignItems="center">
              <Link
                to={`/food-details/${index + 1}`}
                style={{ textDecoration: "none" }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  style={{
                    borderRadius: 8,
                    margin: "15px 2px 2px 2px",
                    maxWidth: "100%", // Ensures the image doesn't exceed the box width
                    maxHeight: 100, // Sets the maximum height for the image
                    objectFit: "contain", // Maintains aspect ratio while fitting the box
                  }}
                />
                <CardContent style={{ padding: "8px" }}>
                  <Typography variant="body2" color="text.secondary">
                    {item.title} {id}
                  </Typography>
                  <Typography variant="body2">{item.price}</Typography>
                </CardContent>
              </Link>
            </Box>
          </Card>
        ))}
      </Box>

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
          zIndex: 10, // Ensures it stays above other elements
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Adds a subtle shadow for depth
          borderRadius: "12px", // Rounded corners for a box-like feel
          border: "1px solid #e0e0e0", // Optional: Adds a light border for definition
          mx: "10px", // Centers the box horizontally within the page
        }}
      >
        <Typography variant="h6">Total {price}</Typography>
        <Button
          variant="contained"
          style={{
            background: "#f96207",
            borderRadius: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ShoppingCart style={{ fontSize: "14px", marginRight: "8px" }} />
          <Typography variant="body1" style={{ margin: "0 3px" }}>
            Add To Cart
          </Typography>
        </Button>
      </Box>
    </Card>
  );
}

export default UserDetails;
