import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  BottomNavigation,
  BottomNavigationAction,
  AppBar,
  Container,
  Typography,
  IconButton,
  Box,
} from "@mui/material";

import {
  Home as HomeIcon,
  Chat as ChatIcon,
  Person as PersonIcon,
  Fastfood as FastfoodIcon,
  Restaurant as RestaurantIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, ArrowBack } from "@mui/icons-material";
import Chat from "./Chat";
import Person from "./Person";
import Home from "./Home";
import FoodMenu from "./FoodMenu";
import FoodMenuDetails from "./FoodMenuDetails";
import Order from "./Order";
import Cart from "./Cart";

function App() {
  const navigate = useNavigate();

  return (
    <Container>
      <AppBar position="static" color="transparent" elevation={0}>
        <IconButton
          color="primary"
          style={{ position: "absolute", left: 16, top: 8 }}
          onClick={() => navigate("/")}
        >
          <ArrowBack />
        </IconButton>
        <Typography variant="h6" align="center">
          My App
        </Typography>
        <IconButton
          style={{ position: "absolute", right: 16, top: 8, color: "#f96207" }}
          onClick={() => navigate("/cart")}
        >
          <ShoppingCart />
        </IconButton>
      </AppBar>

      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/person" element={<Person />} />
        <Route path="/" element={<Home />} />
        <Route path="/food_menu" element={<FoodMenu />} />
        <Route path="/food-details/:id" element={<FoodMenuDetails />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <div
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
          borderTop: "1px #eaeaea solid",
        }}
      >
        <BottomNavigation>
          <BottomNavigationAction
            label="Live Chat"
            icon={<ChatIcon />}
            onClick={() => navigate("/chat")}
          />
          <BottomNavigationAction
            label="Person"
            icon={<PersonIcon />}
            onClick={() => navigate("/person")}
          />
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon />}
            onClick={() => navigate("/")}
          />
          <BottomNavigationAction
            label="Menu"
            icon={<RestaurantIcon />}
            onClick={() => navigate("/food_menu")}
          />
          <BottomNavigationAction
            label="Orders"
            icon={<FastfoodIcon />}
            onClick={() => navigate("/orders")}
          />
        </BottomNavigation>
      </div>
    </Container>
  );
}

export default App;
