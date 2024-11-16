import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Avatar,
  Box,
  TextField,
  Button,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const CustomerProfile = ({ bookedRoomData }) => {
  const [item, setItem] = useState(null);

  // Ensure useEffect only runs once when component mounts
  useEffect(() => {
    setItem(bookedRoomData);
  }, [bookedRoomData]);

  return (
    <>
      {item ? (
        <Paper
          elevation={2}
          style={{ marginTop: "25px", padding: "20px", borderRadius: "10px" }}
        >
          <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
            {item.customer.profile_picture ? (
              <Avatar
                src={item.customer.profile_picture}
                alt={item.customer.profile_picture}
                sx={{ width: 150, height: 150, mb: 1 }}
              />
            ) : (
              <Avatar
                src="https://backend.mytime2cloud.com/media/employee/profile_picture/1731770691.jpg"
                sx={{ width: 150, height: 150, mb: 1 }}
              />
            )}
          </Box>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "space-between",
            }}
          >
            <TextField
              label="Full Name"
              placeholder="Full Name"
              fullWidth
              margin="normal"
              variant="outlined"
              value={item.customer.full_name || ""}
              size="small"
              style={{ flexBasis: "100%", margin: "2px 0" }}
            />

            <TextField
              label="Room Type"
              placeholder="Room Type"
              margin="normal"
              variant="outlined"
              value={item.room_type || ""}
              size="small"
              style={{ flexBasis: "48%", margin: "2px 0" }}
            />

            <TextField
              label="Room No"
              placeholder="Room No"
              margin="normal"
              variant="outlined"
              value={item.room_no || ""}
              size="small"
              style={{ flexBasis: "48%", margin: "2px 0" }}
            />

            <TextField
              label="Check-In"
              placeholder="Check-In"
              fullWidth
              margin="normal"
              variant="outlined"
              value={item.checkin_date_only || ""}
              size="small"
              style={{ flexBasis: "48%", margin: "2px 0" }}
            />

            <TextField
              label="Expected Checkout"
              placeholder="Expected Checkout"
              fullWidth
              margin="normal"
              variant="outlined"
              value={item.checkout_date_only || ""}
              size="small"
              style={{ flexBasis: "48%", margin: "2px 0" }}
            />

            <TextField
              label="Expected Checkout"
              placeholder="Expected Checkout"
              fullWidth
              margin="normal"
              variant="outlined"
              value={item.checkout_date_only || ""}
              size="small"
              style={{ flexBasis: "100%", margin: "2px 0" }}
            />

            <TextField
              label="Balance To Pay"
              placeholder="Balance To Pay"
              fullWidth
              margin="normal"
              variant="outlined"
              value={item.price || ""}
              size="small"
              style={{ flexBasis: "100%", margin: "2px 0" }}
            />
          </div>

          <Button
            variant="contained"
            sx={{
              marginTop: "20px",
              background: "#f96207",
              borderRadius: "50px",
              padding: "10px 10px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
            }}
          >
            <Typography variant="caption" sx={{ margin: "0 15px" }}>
              Checkout
            </Typography>
          </Button>
        </Paper>
      ) : null}
    </>
  );
};

export default CustomerProfile;
