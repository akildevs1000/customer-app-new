import React, { useState, useEffect, useRef } from "react";

import {
  Box,
  Avatar,
  IconButton,
  Typography,
  TextField,
} from "@mui/material";

import { Close, Send } from "@mui/icons-material";

import Voice from "./Voice";

const ChatApp = () => {
  const messagesEndRef = useRef(null); // Reference for scrolling to the bottom
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [previewImages, setPreviewImages] = useState([]);

  useEffect(() => {
    // Scroll to the bottom whenever the messages array changes
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]); // Runs every time `messages` changes

  useEffect(() => {
    fetch(
      "https://backend.myhotel2cloud.com/api/chat?sender_id=7&receiver_id=4&company_id=3"
    )
      .then((response) => response.json())
      .then((data) => {
        setMessages(data);
      })
      .catch((error) => {
        console.error("Error fetching chat data", error);
      });
  }, []);

  const fetchLatestMessages = () => {
    fetch(
      "https://backend.myhotel2cloud.com/api/chat?sender_id=7&receiver_id=4&company_id=3"
    )
      .then((response) => response.json())
      .then((data) => {
        setMessages(data);
      })
      .catch((error) => {
        console.error("Error fetching chat data:", error);
      });
  };
  const handleSendMessage = async () => {
    if (newMessage.trim() !== "") {
      try {
        let payload = {
          message: newMessage,
          sender_id: 7,
          receiver_id: 4,
          chat_photos: [],
          company_id: 3,
          voice: null,
        };

        // Optimistically add the new message to the chat before the server response
        setMessages((prevMessages) => [
          ...prevMessages,
          { ...payload, id: Date.now() }, // Using a temporary ID for now
        ]);

        const response = await fetch(
          "https://backend.myhotel2cloud.com/api/chat",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        // Optional: Handle any errors from the server response
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Optionally, fetch updated messages if needed
        fetchLatestMessages();
      } catch (error) {
        console.log("Error sending message:", error);
        // Optional: Handle rollback if message fails to send
      }

      // Clear input after sending the message
      setNewMessage("");
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      fetchLatestMessages();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleRemovePreviewImage = (index) => {
    const updatedPreviewImages = previewImages.filter((_, i) => i !== index);
    setPreviewImages(updatedPreviewImages);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      sx={{ height: "90vh", mt: 5, p: 0 }}
    >
      {/* Chat Messages Container */}
      <div
        style={{
          flex: 1,
          overflowY: "auto", // Enable vertical scrolling when content overflows
          padding: "16px", // Adjust padding
        }}
      >
        {messages.length === 0 ? (
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography>No messages yet</Typography>
          </Box>
        ) : (
          <Box display="flex" flexDirection="column">
            {messages.map((message, index) => (
              <Box
                key={index}
                display="flex"
                justifyContent={
                  message.sender_id === 7 ? "flex-end" : "flex-start"
                }
                pb={1}
              >
                <Box
                  sx={{
                    fontSize: 13,
                    display: "inline-block",
                    lineHeight: 1.1,
                    marginTop: 2,
                  }}
                >
                  {message.voice_note && (
                    <audio
                      controls
                      style={{
                        width: "200px",
                        height: "40px",
                        marginTop: "-4px",
                      }}
                    >
                      <source src={message.voice_note} />
                    </audio>
                  )}
                  {message.chat_photos.length === 0 ? null : (
                    <Box
                      display="flex"
                      justifyContent={
                        message.sender_id === 7 ? "flex-end" : "flex-start"
                      }
                      gap={1}
                      my={1}
                    >
                      {message.chat_photos.map((chatPhoto, index) => (
                        <Avatar
                          key={index}
                          src={chatPhoto.photo_path}
                          alt="Chat Photo"
                          sx={{
                            border: "5px solid #eaeaea",
                            borderRadius: "5px",
                            width: 50,
                            height: 50,
                          }}
                        />
                      ))}
                    </Box>
                  )}

                  <Box
                    sx={{
                      maxWidth: "200px",
                      wordWrap: "break-word",
                      whiteSpace: "normal",
                    }}
                  >
                    <Typography
                      display={"flex"}
                      justifyContent={
                        message.sender_id === 7 ? "flex-end" : "flex-start"
                      }
                      variant="body2"
                      color="text.secondary"
                    >
                      {message.message}
                    </Typography>
                    <Typography
                      display={"flex"}
                      justifyContent={
                        message.sender_id === 7 ? "flex-end" : "flex-start"
                      }
                      variant="caption"
                      color="text.secondary"
                    >
                      {new Date(message.created_at).toLocaleTimeString()}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        )}

        {/* Scroll to the bottom */}
        <div ref={messagesEndRef} style={{ paddingBottom: "60px" }} />
      </div>

      {/* Input Field at Bottom */}
      <Box
        sx={{
          position: "sticky",
          bottom: 60,
          backgroundColor: "white",
        }}
      >
        {/* Image Previews */}
        {previewImages.length > 0 && (
          <Box display="flex" gap={1} mb={1}>
            {previewImages.map((previewImage, index) => (
              <Box key={index} position="relative">
                <IconButton
                  color="error"
                  size="small"
                  sx={{ position: "absolute", left: 35, top: -15, zIndex: 1 }}
                  onClick={() => handleRemovePreviewImage(index)}
                >
                  <Close fontSize="small" />
                </IconButton>
                <Avatar
                  src={previewImage}
                  alt="Preview"
                  sx={{
                    border: "1px solid purple",
                    borderRadius: 1,
                    width: 50,
                    height: 50,
                  }}
                />
              </Box>
            ))}
          </Box>
        )}

        <Box display="flex" alignItems="center">
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            onKeyUp={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Voice />
          <IconButton onClick={handleSendMessage} color="primary">
            <Send />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatApp;
