import { Card, CardMedia, CardContent, Button, Typography, Box } from '@mui/material';

const DealCards = () => {
  const cardData = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd8AmEDFmAX5cUpC2_ZzXOrNAJ0cM4fWaMMQ&s",
      title: "Exclusive Deal!",
      description: "Enjoy an amazing discount on our premium products. Don't miss out on this limited-time offer!",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd8AmEDFmAX5cUpC2_ZzXOrNAJ0cM4fWaMMQ&s",
      title: "Summer Promotion!",
      description: "Get ready for summer with our exclusive seasonal discounts. Shop now!",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd8AmEDFmAX5cUpC2_ZzXOrNAJ0cM4fWaMMQ&s",
      title: "Attraction Deals!",
      description: "Book your tickets today and get up to 30% off on popular attractions.",
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 3, // Adds space between the cards
        mt:5,
        justifyContent: 'center', // Centers the cards horizontally
      }}
    >
      {cardData.map((card, index) => (
        <Box
          key={index}
          sx={{
            width: { xs: '100%', sm: '48%', md: '30%' }, // Responsive width based on screen size
            maxWidth: 400, // Optional, to limit the max width of cards
          }}
        >
          <Card
            sx={{
              borderRadius: '15px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
            }}
          >
            <CardMedia
              component="img"
              height="194"
              image={card.image}
              alt={card.title}
              sx={{
                objectFit: 'cover',
              }}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {card.description}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: '#f96207',
                  borderRadius: '50px',
                  padding: '10px 20px',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                }}
              >
                <Typography variant="caption" sx={{ margin: '0 5px' }}>
                  Submit
                </Typography>
              </Button>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default DealCards;
