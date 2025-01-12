import { Container, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const Home = () => {
  // Get the base URL for images
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <Box 
      sx={{ 
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#fff'
      }}
    >
      <Container 
        sx={{ 
          position: 'relative',
          maxWidth: '1200px !important',
          px: { xs: 2, sm: 4, md: 6 }
        }}
      >
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: 8,
            position: 'relative',
          }}
        >
          {/* Pet Corner Images */}
          <Box
            component="img"
            src={`${baseUrl}images/biscuit2.PNG`}
            alt="Biscuit the dog"
            sx={{
              position: 'absolute',
              top: 20,
              left: '-100px',
              width: 150,
              height: 150,
              objectFit: 'contain',
              zIndex: 1,
            }}
          />
          <Box
            component="img"
            src={`${baseUrl}images/buckwheat1.PNG`}
            alt="Buckwheat the cat"
            sx={{
              position: 'absolute',
              top: 20,
              right: '-100px',
              width: 150,
              height: 150,
              objectFit: 'contain',
              zIndex: 1,
            }}
          />
          <Box
            component="img"
            src={`${baseUrl}images/biscuit1.PNG`}
            alt="Biscuit the dog"
            sx={{
              position: 'absolute',
              bottom: 20,
              right: '-100px',
              width: 150,
              height: 150,
              objectFit: 'contain',
              zIndex: 1,
            }}
          />
          <Box
            component="img"
            src={`${baseUrl}images/buckwheat2.PNG`}
            alt="Buckwheat the cat"
            sx={{
              position: 'absolute',
              bottom: 20,
              left: '-100px',
              width: 150,
              height: 150,
              objectFit: 'contain',
              zIndex: 1,
            }}
          />

          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              mb: 4,
              textAlign: 'center',
              fontFamily: '"Playfair Display", serif',
            }}
          >
            Emily & Richard
          </Typography>
          
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              textAlign: 'center',
              fontFamily: '"Playfair Display", serif',
            }}
          >
            Are getting married!
          </Typography>

          {/* Featured Photo */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            sx={{
              width: '100%',
              maxWidth: 600,
              mb: 4,
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: 3,
            }}
          >
            <Box
              component="img"
              src={`${baseUrl}images/Richard and Emily.jpeg`}
              alt="Emily and Richard"
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </Box>

          <Paper
            elevation={3}
            sx={{
              p: 4,
              maxWidth: 600,
              width: '100%',
              textAlign: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            }}
          >
            <Typography variant="h5" gutterBottom>
              Join us on
            </Typography>
            <Typography
              variant="h3"
              sx={{
                mt: 4,
                mb: 6,
                color: 'secondary.main',
                fontFamily: '"Playfair Display", serif',
                fontStyle: 'italic'
              }}
            >
              September 20th, 2025
            </Typography>
            <Typography variant="h6">
              In Our Backyard
            </Typography>
            <Typography variant="subtitle1">
              4390 Jana Vista Rd, El Sobrante, CA
            </Typography>
          </Paper>

          <Typography
            variant="caption"
            sx={{
              mt: 4,
              textAlign: 'center',
              opacity: 0.7,
              fontStyle: 'italic'
            }}
          >
            Photo by James Barney. Illustrations by Emily.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;