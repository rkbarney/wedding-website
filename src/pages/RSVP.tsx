import { Container, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';

const RSVP = () => {
  return (
    <Container maxWidth="md">
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{ 
          py: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom align="center">
          RSVP
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 3 }}>
          Please fill out our RSVP form to let us know if you can join us for our special day.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="https://docs.google.com/forms/d/e/1FAIpQLScD77kbkpVMtBv-Y90IqaTJpl4lp-pZ-6Qe9yDlsJNX2Iql6w/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontSize: '1.1rem',
            padding: '12px 24px',
            backgroundColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'primary.dark',
            },
          }}
        >
          RSVP Now
        </Button>
      </Box>
    </Container>
  );
};

export default RSVP;