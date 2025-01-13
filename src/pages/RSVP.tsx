import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const RSVP = () => {
  return (
    <Container maxWidth="md">
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{ py: 8 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center">
          RSVP
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary">
          This part of the site is under construction
        </Typography>
      </Box>
    </Container>
  );
};

export default RSVP;