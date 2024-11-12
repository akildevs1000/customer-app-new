import React from "react";
import { Link } from "react-router-dom";

import { Typography, Card, CardMedia, CardContent, Box } from "@mui/material";

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
  {
    description: `lorem`,
    category_id: 1,
    id: 4,
    title: "Mixed Salad",
    price: "₹100.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRzBPWBLfvfpEQytdUQ6JYA8hTxk_be-9xgUbjUXrcQPKuDcnGDhSR1JaJw1plQ2srI7Q&usqp=CAU",
  },
  {
    description: `lorem`,
    category_id: 1,
    id: 5,
    title: "Chicken Pasta Salad",
    price: "₹700.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFn2dkLKkDUxBtrUdN54y16sZCWcCb1wOWlw&s",
  },
  {
    description: `lorem`,
    category_id: 1,
    id: 6,
    title: "Beef Salad",
    price: "₹300.00",
    image:
      "https://www.shutterstock.com/shutterstock/photos/688465564/display_1500/stock-vector-set-of-fast-food-icons-in-circle-shape-vector-illustration-for-your-cute-design-688465564.jpg",
  },

  {
    description: `lorem`,
    category_id: 2,
    id: 1,
    title: "Spicy Noodles",
    price: "₹1,500.00",
    image:
      "https://img.freepik.com/premium-photo/circle-fruits-vegetables-with-clock-top_1274269-162495.jpg?w=740",
  },
  {
    description: `lorem`,
    category_id: 2,
    id: 2,
    title: "Shrimp Pasta",
    price: "₹800.00",
    image:
      "https://img.freepik.com/premium-photo/circle-food-with-picture-circle-fruits-vegetables_1274269-165445.jpg",
  },
  {
    description: `lorem`,
    category_id: 2,
    id: 3,
    title: "Vegetable Curry",
    price: "₹300.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoqv3doDpDLZX7dhxdmFBomPiYCfjrxVNLiTlsC5uXbuLm3P17XTNgOENlVlKLQx9mdg&usqp=CAU",
  },
  {
    description: `lorem`,
    category_id: 3,
    id: 1,
    title: "Spicy Noodles",
    price: "₹1,500.00",
    image:
      "https://img.freepik.com/premium-photo/circle-fruits-vegetables-with-clock-top_1274269-162495.jpg?w=740",
  },
  {
    description: `lorem`,
    category_id: 3,
    id: 2,
    title: "Shrimp Pasta",
    price: "₹800.00",
    image:
      "https://img.freepik.com/premium-photo/circle-food-with-picture-circle-fruits-vegetables_1274269-165445.jpg",
  },
  {
    description: `lorem`,
    category_id: 3,
    id: 3,
    title: "Vegetable Curry",
    price: "₹300.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtoqv3doDpDLZX7dhxdmFBomPiYCfjrxVNLiTlsC5uXbuLm3P17XTNgOENlVlKLQx9mdg&usqp=CAU",
  },
  {
    description: `lorem`,
    category_id: 3,
    id: 6,
    title: "Beef Salad",
    price: "₹300.00",
    image:
      "https://www.shutterstock.com/shutterstock/photos/688465564/display_1500/stock-vector-set-of-fast-food-icons-in-circle-shape-vector-illustration-for-your-cute-design-688465564.jpg",
  },
];

function App({ id }) {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
      gap={2}
      mt={3} // Reduced top margin for less space above the Box
    >
      {menuItems.filter((e => e.category_id == id)).map((item, index) => (
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
              to={{
                pathname: `/food-details/${item.id}`,
                state: { item }, // Passing the item object using state
              }}
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
                  maxHeight: 130, // Sets the maximum height for the image
                  objectFit: "contain", // Maintains aspect ratio while fitting the box
                }}
              />
              <CardContent style={{ padding: "8px" }}>
                <Typography variant="body2" color="text.secondary">
                  {item.title} - {item.id}
                </Typography>
                <Typography variant="body2" color="text.secondary">{item.price}</Typography>
              </CardContent>
            </Link>
          </Box>
        </Card>
      ))}
    </Box>
  );
}

export default App;
