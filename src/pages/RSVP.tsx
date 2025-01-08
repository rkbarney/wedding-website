import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: '',
    guests: '',
    dietaryRestrictions: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Container maxWidth="md">
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{ py: 8 }}
      >
        <Typography
          variant="h2"
          sx={{
            mb: 6,
            textAlign: 'center',
            fontFamily: '"Playfair Display", serif',
          }}
        >
          RSVP
        </Typography>

        <Paper
          elevation={3}
          sx={{
            p: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          }}
        >
          {submitted ? (
            <Alert severity="success" sx={{ mb: 2 }}>
              Thank you for your RSVP! We look forward to celebrating with you.
            </Alert>
          ) : (
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                sx={{ mb: 3 }}
              />

              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                sx={{ mb: 3 }}
              />

              <FormControl component="fieldset" sx={{ mb: 3 }}>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  Will you be attending?
                </Typography>
                <RadioGroup
                  name="attending"
                  value={formData.attending}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Joyfully Accept"
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio />}
                    label="Regretfully Decline"
                  />
                </RadioGroup>
              </FormControl>

              {formData.attending === 'yes' && (
                <>
                  <TextField
                    fullWidth
                    label="Number of Guests"
                    name="guests"
                    type="number"
                    value={formData.guests}
                    onChange={handleChange}
                    sx={{ mb: 3 }}
                  />

                  <TextField
                    fullWidth
                    label="Dietary Restrictions"
                    name="dietaryRestrictions"
                    multiline
                    rows={3}
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                    sx={{ mb: 3 }}
                  />
                </>
              )}

              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
              >
                Submit RSVP
              </Button>
            </form>
          )}
        </Paper>
      </Box>
    </Container>
  );
};

export default RSVP;
