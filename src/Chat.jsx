import React, { useState } from "react";
import {
  Box,
  Card,
  Avatar,
  IconButton,
  Typography,
  TextField,
  Button,
  CardMedia,
  CardContent,
} from "@mui/material";

import { Close, Send } from "@mui/icons-material";

const ChatApp = () => {
  const [messages] = useState([
    {
      sender_id: 1,
      message: "Hey there!",
      created_at: "10:00 AM",
      voice_note: "",
      chat_photos: [],
    },
    {
      sender_id: 1,
      message: "Hey there!",
      created_at: "10:00 AM",
      voice_note: "",
      chat_photos: [
        {
          photo_path:
            "https://img.freepik.com/premium-photo/circle-fruits-vegetables-with-clock-top_1274269-162495.jpg?w=740",
        },
      ],
    },
    {
      sender_id: 1,
      message: "Hey there!",
      created_at: "10:00 AM",
      voice_note: "",
      chat_photos: [
        {
          photo_path:
            "https://img.freepik.com/premium-photo/circle-fruits-vegetables-with-clock-top_1274269-162495.jpg?w=740",
        },
      ],
    },

    {
      sender_id: 2,
      message: "Hello!",
      created_at: "10:05 AM",
      voice_note: "",
      chat_photos: [
        {
          photo_path:
            "https://img.freepik.com/premium-photo/circle-fruits-vegetables-with-clock-top_1274269-162495.jpg?w=740",
        },
      ],
    },
    {
      sender_id: 1,
      message: "Hey there!",
      created_at: "10:00 AM",
      voice_note: "",
      chat_photos: [
        {
          photo_path:
            "https://img.freepik.com/premium-photo/circle-fruits-vegetables-with-clock-top_1274269-162495.jpg?w=740",
        },
      ],
    },
    {
      sender_id: 2,
      message: "Hello!",
      created_at: "10:05 AM",
      voice_note: "",
      chat_photos: [
        {
          photo_path:
            "https://img.freepik.com/premium-photo/circle-fruits-vegetables-with-clock-top_1274269-162495.jpg?w=740",
        },
      ],
    },
    {
      sender_id: 1,
      message: "Hey there!",
      created_at: "10:00 AM",
      voice_note: "",
      chat_photos: [
        {
          photo_path:
            "https://img.freepik.com/premium-photo/circle-fruits-vegetables-with-clock-top_1274269-162495.jpg?w=740",
        },
      ],
    },
    {
      sender_id: 2,
      message: "Hello!",
      created_at: "10:05 AM",
      voice_note: "",
      chat_photos: [
        {
          photo_path:
            "https://img.freepik.com/premium-photo/circle-fruits-vegetables-with-clock-top_1274269-162495.jpg?w=740",
        },
      ],
    },
    {
      sender_id: 1,
      message: "Hey there!",
      created_at: "10:00 AM",
      voice_note: "",
      chat_photos: [
        {
          photo_path:
            "https://img.freepik.com/premium-photo/circle-fruits-vegetables-with-clock-top_1274269-162495.jpg?w=740",
        },
      ],
    },
    {
      sender_id: 2,
      message: "Hello!",
      created_at: "10:05 AM",
      voice_note: "",
      chat_photos: [
        {
          photo_path:
            "https://img.freepik.com/premium-photo/circle-fruits-vegetables-with-clock-top_1274269-162495.jpg?w=740",
        },
      ],
    },
    {
      sender_id: 1,
      message: "Hey there!",
      created_at: "10:00 AM",
      voice_note: "",
      chat_photos: [
        {
          photo_path:
            "https://img.freepik.com/premium-photo/circle-fruits-vegetables-with-clock-top_1274269-162495.jpg?w=740",
        },
      ],
    },
    {
      sender_id: 2,
      message: "Hello!",
      created_at: "10:05 AM",
      voice_note: "",
      chat_photos: [
      ],
    },
    {
      sender_id: 1,
      message: "Hey there!",
      created_at: "10:00 AM",
      voice_note: "",
      chat_photos: [
        {
          photo_path:
            "https://img.freepik.com/premium-photo/circle-fruits-vegetables-with-clock-top_1274269-162495.jpg?w=740",
        },
      ],
    },
    {
      sender_id: 2,
      message: "Hello!",
      created_at: "10:05 AM",
      voice_note: "",
      chat_photos: [
        {
          photo_path:
            "https://img.freepik.com/premium-photo/circle-fruits-vegetables-with-clock-top_1274269-162495.jpg?w=740",
        },
      ],
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [previewImages, setPreviewImages] = useState([
    "https://via.placeholder.com/50",
  ]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      // Logic to send a message
      setNewMessage("");
    }
  };

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
      <div sx={{ flex: 1, overflowY: "auto", p: 2, minHeight: "50vh" }}>
        {messages.length === 0 ? (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: "inherit" }}
          >
            <Typography>No messages yet</Typography>
          </Box>
        ) : (
          <Box display="flex" flexDirection="column">
            {messages.map((message, index) => (
              <Box
                key={index}
                display="flex"
                justifyContent={
                  message.sender_id === 1 ? "flex-end" : "flex-start"
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
                        message.sender_id === 1 ? "flex-end" : "flex-start"
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
                        message.sender_id === 1 ? "flex-end" : "flex-start"
                      }
                      variant="body2"
                      color="text.secondary"
                    >
                      {message.message}dfssdfffffffffffffffffffffff
                    </Typography>
                    <Typography
                      display={"flex"}
                      justifyContent={
                        message.sender_id === 1 ? "flex-end" : "flex-start"
                      }
                      variant="caption"
                      color="text.secondary"
                    >
                      {message.created_at}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </div>

      {/* Input Field at Bottom */}
      <Box
        sx={{ position: "sticky", bottom: 60, backgroundColor: "white", p: 2 }}
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

        <Box display="flex" alignItems="center" gap={2}>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            onKeyUp={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Button
            color="primary"
            onClick={handleSendMessage}
            startIcon={<Send />}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ChatApp;
