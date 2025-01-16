import React, { useState, useEffect, useRef } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Grow } from "@mui/material";
import football from "../asset/football win.jpg";
import cricket from "../asset/CRICKET.jpeg";
import athlets from "../asset/Athletic.jpeg";

// Sample data for sports cards
const sportsData = [
  {
    title: "Football",
    description:
      "Football is a popular sport played in our college. We are champions of last 5 years of University level sports",
    image: football,
  },
  {
    title: "Cricket Champions",
    description:
      "Cricket is a fast-paced game loved by millions. In our Al Ameen college we give priority to sports that gives students a healthy life and brightest future",
    image: cricket,
  },
  {
    title: "Athletics",
    description:
      "KSLU 7th intercollegiate athletic championship for men and women to be hosted by KSLU on 27th & 28th February 2019 AT R N SHETTY STADIUM DHARWAD. There Are 56 Team Will Be Participated In This Tournament For Zone Wise. Totally 488 Student Participated Including Men And Women In This Championship.",
    image: athlets,
  },
];

export default function FullWidthCards() {
  const [visibleCards, setVisibleCards] = useState([]);

  const cardRefs = useRef([]); // Array to hold references to each card

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target);
            if (index !== -1 && !visibleCards.includes(index)) {
              setVisibleCards((prev) => [...prev, index]);
            }
          }
        });
      },
      {
        threshold: 0.3, // Trigger animation when 30% of the card is visible
      }
    );

    // Observe each card
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect(); // Cleanup on component unmount
  }, [visibleCards]);

  return (
    <div>
      <br />
      <Box sx={{ width: "100%", p: 4, textAlign: "center" }}>
        {/* Intro Section */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", sm: "3rem", md: "3.5rem" },
              color: "#333",
            }}
          >
            Al-Ameen Sports Campaign
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{
              mx: "auto",
              maxWidth: 1300,
              fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
              lineHeight: 1.6,
            }}
          >
            At Al-Ameen College, we believe in the power of sports to shape character, build teamwork, and foster a
            sense of discipline. With a strong focus on athletics and extracurricular activities, we aim to nurture
            both academic and physical excellence among our students. Join us in celebrating the spirit of sportsmanship!
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 0,
          width: "80%",
          marginLeft:'100px'
        }}
      >
        {sportsData.map((sport, index) => (
          <Grow
            in={visibleCards.includes(index)} // Only grow visible cards
            key={index}
            style={{ transformOrigin: "0 0 0" }}
            timeout={800} // Animation duration
          >
            <Card
              ref={(el) => (cardRefs.current[index] = el)} // Attach ref to each card
              sx={{
                width: "100%",
                boxShadow: 3,
          

              }}
            >
              {/* Image Section */}
              <CardMedia
                component="img"
                sx={{
                  height: 500,
                  objectFit: "cover",
                }}
                image={sport.image}
                alt={sport.title}
              />

              {/* Content Section */}
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {sport.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {sport.description}
                </Typography>
              </CardContent>
            </Card>
          </Grow>
        ))}
      </Box>
    </div>
  );
}
