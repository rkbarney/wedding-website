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
        backgroundColor: '#fff',
        overflow: 'hidden',  // Prevent horizontal scroll
        margin: 0,
        padding: 0
      }}
    >
      <Container 
        sx={{ 
          position: 'relative',
          maxWidth: '1200px !important',
          px: { xs: 0, sm: 4, md: 6 },  // Remove padding on mobile
          mx: 'auto',
          width: '100%'
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
            py: { xs: 8, sm: 8 },  // Increased top padding on mobile
            position: 'relative',
            width: '100%',
            margin: 0
          }}
        >
          {/* Pet Corner Images */}
          <Box
            component="img"
            src={`${baseUrl}images/biscuit2.PNG`}
            alt="Biscuit the dog"
            sx={{
              position: 'absolute',
              top: { xs: '-70px', sm: 20 },
              left: { xs: '10px', sm: 20 },
              width: { xs: 80, sm: 120, md: 150 },
              height: { xs: 80, sm: 120, md: 150 },
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
              top: { xs: '-70px', sm: 20 },
              right: { xs: '10px', sm: 20 },
              width: { xs: 80, sm: 120, md: 150 },
              height: { xs: 80, sm: 120, md: 150 },
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
              bottom: { xs: 10, sm: 20 },
              right: { xs: 10, sm: 20 },
              width: { xs: 80, sm: 120, md: 150 },
              height: { xs: 80, sm: 120, md: 150 },
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
              bottom: { xs: 10, sm: 20 },
              left: { xs: 10, sm: 20 },
              width: { xs: 80, sm: 120, md: 150 },
              height: { xs: 80, sm: 120, md: 150 },
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
              p: { xs: 2, sm: 4 },  // Less padding on mobile
              maxWidth: '100%',      // Full width on mobile
              width: '100%',
              textAlign: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              mx: { xs: 2, sm: 'auto' },  // Add margin on mobile
              boxSizing: 'border-box'      // Include padding in width calculation
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