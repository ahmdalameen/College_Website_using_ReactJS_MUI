import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
  Collapse,
  Grow,
  Slide,
  Alert,
  Box,
} from "@mui/material";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [animateFields, setAnimateFields] = useState(false);

  const courses = [
    "BA English Literature",
    "BA Tamil Literature",
    "BA Hindi Literature",
    "BA History",
    "BA Sociology",
    "MA English Literature",
    "MA Tamil Literature",
    "MA Hindi Literature",
    "MA History",
    "MA Sociology",
  ];

  // Trigger animations when the component mounts
  useEffect(() => {
    const timer = setTimeout(() => setAnimateFields(true), 300); // Start animation slightly later
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required.";
    if (!formData.email) {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Invalid email address.";
    }
    if (!formData.phone) {
      formErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = "Phone number must be 10 digits.";
    }
    if (!formData.course) formErrors.course = "Please select a course.";
    if (!formData.address) formErrors.address = "Address is required.";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setFormSubmitted(true);
      console.log("Form Submitted Successfully", formData);
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        address: "",
      });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div style={{ maxWidth: "800px", marginTop: "50px", margin: "0 auto", padding: "20px" }}>
      <br />
      <br />
      {/* Title */}
      <Typography
        variant="h3"
        component="h1"
        align="center"
        gutterBottom
        style={{ color: "red", fontWeight: "bold" }}
      >
        Al Ameen College of Arts and Science
      </Typography>
      <Typography
        variant="h6"
        align="center"
        gutterBottom
        style={{ marginBottom: "20px", color: "black" }}
      >
        Empowering Students with Knowledge and Excellence
      </Typography>
      <Typography color="black" variant="body1" align="center" gutterBottom>
        Al Ameen College offers BA and MA courses in languages, history, and sociology. Fill in
        the form below to register and take the first step toward your academic journey!
      </Typography>

      <Box sx={{ mt: 4 }}>
        {/* Form Section */}
        <Collapse in={!formSubmitted}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {/* Name Field */}
              <Grid item xs={12}>
                <Slide
                  direction="right"
                  in={animateFields}
                  timeout={1500} // Slow animation duration
                  style={{ transitionDelay: animateFields ? "200ms" : "0ms" }}
                >
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    variant="outlined"
                  />
                </Slide>
              </Grid>

              {/* Email Field */}
              <Grid item xs={12}>
                <Slide
                  direction="left"
                  in={animateFields}
                  timeout={1500} // Slow animation duration
                  style={{ transitionDelay: animateFields ? "400ms" : "0ms" }}
                >
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    variant="outlined"
                  />
                </Slide>
              </Grid>

              {/* Phone Field */}
              <Grid item xs={12}>
                <Slide
                  direction="right"
                  in={animateFields}
                  timeout={1500} // Slow animation duration
                  style={{ transitionDelay: animateFields ? "600ms" : "0ms" }}
                >
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    error={!!errors.phone}
                    helperText={errors.phone}
                    variant="outlined"
                  />
                </Slide>
              </Grid>

              {/* Course Field */}
              <Grid item xs={12}>
                <Slide
                  direction="left"
                  in={animateFields}
                  timeout={1500} // Slow animation duration
                  style={{ transitionDelay: animateFields ? "800ms" : "0ms" }}
                >
                  <FormControl fullWidth error={!!errors.course} variant="outlined">
                    <InputLabel>Course</InputLabel>
                    <Select
                      value={formData.course}
                      name="course"
                      onChange={handleChange}
                      label="Course"
                    >
                      {courses.map((course, index) => (
                        <MenuItem key={index} value={course}>
                          {course}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.course && <FormHelperText>{errors.course}</FormHelperText>}
                  </FormControl>
                </Slide>
              </Grid>

              {/* Address Field */}
              <Grid item xs={12}>
                <Slide
                  direction="right"
                  in={animateFields}
                  timeout={1000} // Slow animation duration
                  style={{ transitionDelay: animateFields ? "1000ms" : "0ms" }}
                >
                  <TextField
                    fullWidth
                    label="Address"
                    name="address"
                    multiline
                    rows={4}
                    value={formData.address}
                    onChange={handleChange}
                    error={!!errors.address}
                    helperText={errors.address}
                    variant="outlined"
                  />
                </Slide>
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Grow
                  in={animateFields}
                  timeout={1500} // Slow animation duration
                  style={{ transitionDelay: animateFields ? "1200ms" : "0ms" }}
                >
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{
                      padding: "12px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      backgroundColor: "#007BFF",
                    }}
                  >
                    Register Now
                  </Button>
                </Grow>
              </Grid>
            </Grid>
          </form>
        </Collapse>

        {/* Success Message */}
        <Collapse in={formSubmitted}>
          <Alert
            severity="success"
            sx={{
              mt: 3,
              animation: "fadeIn 1s ease-in-out",
            }}
          >
            Registration Successful! Thank you for registering with Al Ameen College.
          </Alert>
        </Collapse>
      </Box>
    </div>
  );
};

export default AdmissionForm;
