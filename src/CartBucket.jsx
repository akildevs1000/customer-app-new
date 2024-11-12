import { ShoppingCart } from "@mui/icons-material";
import { useCart } from "./contexts/CartContext";
import { IconButton, Badge } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router for navigation

const Parent = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  return (
    <IconButton
      style={{ position: "absolute", right: 16, top: 8, color: "#f96207" }}
      onClick={() => navigate("/cart")}
    >
      <Badge
        badgeContent={cartItems.length}  // Display cart item count as badge
        color="secondary"  // Optional: You can change the badge color here
        invisible={cartItems.length === 0}  // Optional: Hide the badge if no items in the cart
      >
        <ShoppingCart />
      </Badge>
    </IconButton>
  );
};

export default Parent;
