import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  CssBaseline,
  Paper,
} from "@mui/material";
import UnstyledSnackbarIntroduction from "./buttonFeedback";
import bgimg from '../asset/BG.webp'

import HoverRating from "./rating";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback Submitted:", formData);
    alert("Thank you for your feedback!");
    setFormData({
      name: "",
      email: "",
      feedback: "",
    });
  };

  return (

    <Container  component="main" maxWidth="sm">
      <CssBaseline />
      <br />
      <Paper style={{
        backgroundSize: "cover",
        color: "white",
        width: "400px",
        borderRadius: '10px',
        boxShadow: '0px 2px 5px black',
        marginLeft: '70px',
        height: '500px',



      }} className="feed" elevation={3} sx={{ padding: 3, marginTop: 5 }}>
        <Typography component="h1" variant="h5" align="center" gutterBottom>
          <h3>Feedback</h3>
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 2 }}
        >
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            multiline
            rows={4}
            margin="normal"
            required
          />
          <Button style={{ marginLeft: '130px' }}



            sx={{ mt: 3 }}
          >
            <UnstyledSnackbarIntroduction />

          </Button>
        </Box>

        <Typography>
          <div style={{marginLeft:'-300px', marginTop:'-300px'}}>
            <HoverRating />
          </div>
        </Typography>

      </Paper>
    </Container>
  );
};

export default FeedbackForm;
