import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
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

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {
  const query = useQuery();
  const company_id = query.get("company_id");
  const roomId = query.get("room_id");
  const roomNo = query.get("room_no");
  const otp = query.get("otp");

  const [loading, setLoading] = useState(false);
  const [bookedRoomData, setBookedRoomData] = useState(null);
  const [logo, setLogo] = useState(null);

  const [OTPInput, setOTPInput] = useState(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      let url = `https://backend.myhotel2cloud.com/api/get_checkin_customer_data`;
      let endpoint = `${url}?company_id=${company_id}&room_id=${roomId}&room_no=${roomNo}&otp=${otp}`;

      try {
        setLoading(true);
        const response = await fetch(endpoint);
        const { record, status, message } = await response.json();

        if (!status) {
          localStorage.setItem("bookedRoomData", null);
          throw new Error(`Error: ${message}`);
        }

        localStorage.setItem("bookedRoomData", JSON.stringify(record));
        setBookedRoomData(record); // Use `record` instead of `response`
        setOTPInput(record.whatsapp_otp);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }

      setLogo("https://backend.myhotel2cloud.com/upload/1673109140.jpg");
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs on component mount (page load)

  const navigate = useNavigate();

  const handleSubmit = () => navigate(`/home`);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
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
            image={logo}
            alt={"logo"}
            style={{
              background: "none",
              borderRadius: 8,
              maxWidth: "100%",
              maxHeight: 150,
              objectFit: "contain",
            }}
          />
        </Box>
        {!bookedRoomData ? (
          <Typography
            style={{ marginTop: 30 }}
            variant="caption"
            align="center"
            color="textSecondary"
          >
            No Details Found
          </Typography>
        ) : (
          <>
            <Typography
              style={{ marginTop: 30 }}
              variant="caption"
              align="center"
              color="textSecondary"
            >
              Hello
            </Typography>

            <Typography variant="body1" align="center" color="black">
              {bookedRoomData && bookedRoomData?.customer?.full_name}
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
                value={OTPInput}
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
              onClick={handleSubmit}
            >
              <Typography variant="body1" style={{ color: "#fff" }}>
                Verify OTP
              </Typography>
            </Button>
            <Typography
              variant="body1"
              align="center"
              color="red"
              marginTop={2}
            >
              Resend
            </Typography>
          </>
        )}
      </Card>
    </div>
  );
}

export default App;
