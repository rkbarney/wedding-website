import { Container, Typography, Box, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Registry = () => {
  const registries = [
    {
      name: 'Amazon',
      description: 'Find a variety of home goods and more',
      url: 'https://www.amazon.com/wedding',
    },
    {
      name: 'Crate & Barrel',
      description: 'Modern furniture and home decor',
      url: 'https://www.crateandbarrel.com/gift-registry',
    },
    {
      name: 'Target',
      description: 'Everything for our new home',
      url: 'https://www.target.com/gift-registry',
    },
  ];

  return (
    <Container>
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
            mb: 4,
            textAlign: 'center',
            fontFamily: '"Playfair Display", serif',
          }}
        >
          Registry
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mb: 6,
            textAlign: 'center',
            maxWidth: 600,
            mx: 'auto',
          }}
        >
          Your presence at our wedding is the greatest gift of all. However, if
          you wish to honor us with a gift, we are registered at the following
          stores:
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {registries.map((registry, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                component={motion.div}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    mb: 2,
                    color: 'primary.main',
                    fontFamily: '"Playfair Display", serif',
                  }}
                >
                  {registry.name}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {registry.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={registry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Registry
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Registry;
