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
        overflow: 'hidden'  
      }}
    >
      <Container 
        sx={{ 
          position: 'relative',
          maxWidth: { xs: '100%', sm: '1200px' },
          px: { xs: 2, sm: 4, md: 6 },
          mx: 'auto'
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
            py: { xs: 4, sm: 8 },
            position: 'relative',
            width: '100%'
          }}
        >
          {/* Pet Corner Images - Hide on mobile */}
          <Box
            component="img"
            src={`${baseUrl}images/biscuit2.PNG`}
            alt="Biscuit the dog"
            sx={{
              position: 'absolute',
              top: 20,
              left: { xs: '-50px', sm: '-100px' },
              width: { xs: 100, sm: 150 },
              height: { xs: 100, sm: 150 },
              objectFit: 'contain',
              zIndex: 1,
              display: { xs: 'none', sm: 'block' }
            }}
          />
          <Box
            component="img"
            src={`${baseUrl}images/buckwheat1.PNG`}
            alt="Buckwheat the cat"
            sx={{
              position: 'absolute',
              top: 20,
              right: { xs: '-50px', sm: '-100px' },
              width: { xs: 100, sm: 150 },
              height: { xs: 100, sm: 150 },
              objectFit: 'contain',
              zIndex: 1,
              display: { xs: 'none', sm: 'block' }
            }}
          />
          <Box
            component="img"
            src={`${baseUrl}images/biscuit1.PNG`}
            alt="Biscuit the dog"
            sx={{
              position: 'absolute',
              bottom: 20,
              right: { xs: '-50px', sm: '-100px' },
              width: { xs: 100, sm: 150 },
              height: { xs: 100, sm: 150 },
              objectFit: 'contain',
              zIndex: 1,
              display: { xs: 'none', sm: 'block' }
            }}
          />
          <Box
            component="img"
            src={`${baseUrl}images/buckwheat2.PNG`}
            alt="Buckwheat the cat"
            sx={{
              position: 'absolute',
              bottom: 20,
              left: { xs: '-50px', sm: '-100px' },
              width: { xs: 100, sm: 150 },
              height: { xs: 100, sm: 150 },
              objectFit: 'contain',
              zIndex: 1,
              display: { xs: 'none', sm: 'block' }
            }}
          />

          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '4rem' },
              textAlign: 'center',
              mb: { xs: 2, sm: 4 },
              fontFamily: '"Playfair Display", serif',
              color: 'text.primary'
            }}
          >
            Emily & Richard
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' },
              textAlign: 'center',
              mb: { xs: 3, sm: 6 },
              fontFamily: '"Playfair Display", serif',
              color: 'text.primary'
            }}
          >
            Are getting married!
          </Typography>

          <Box
            component={Paper}
            elevation={3}
            sx={{
              width: '100%',
              maxWidth: { xs: '100%', sm: '80%', md: '60%' },
              borderRadius: 2,
              overflow: 'hidden',
              mb: { xs: 3, sm: 6 }
            }}
          >
            <Box
              component="img"
              src={`${baseUrl}images/engagement.jpg`}
              alt="Engagement photo"
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </Box>

          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '1.5rem', sm: '2rem' },
              textAlign: 'center',
              mb: 2,
              fontFamily: '"Playfair Display", serif',
            }}
          >
            Join us on
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '3rem' },
              textAlign: 'center',
              color: '#FF9E80',
              fontFamily: '"Playfair Display", serif',
            }}
          >
            September 20th, 2024
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;