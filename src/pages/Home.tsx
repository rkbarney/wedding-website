import { Container, Typography, Box, Paper, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [showOverlay, setShowOverlay] = useState(() => {
    // Check if this is the first load in this session
    return !sessionStorage.getItem('hasVisitedThisSession');
  });
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const baseUrl = import.meta.env.BASE_URL;
  const [isPortrait, setIsPortrait] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };
    
    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    
    return () => window.removeEventListener('resize', checkOrientation);
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerDimensions({
          width: rect.width,
          height: window.innerHeight - 64
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (showOverlay) {
      const timer = setTimeout(() => {
        setShowOverlay(false);
        // Set the flag in sessionStorage after the animation
        sessionStorage.setItem('hasVisitedThisSession', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showOverlay]);

  return (
    <>
      <AnimatePresence>
        {showOverlay && (
          <Box
            component={motion.div}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              filter: "blur(10px)",
              scale: 1.1
            }}
            transition={{ 
              duration: 2,
              ease: "easeOut"
            }}
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
            }}
          >
            <Box
              sx={{
                width: containerDimensions.width ? `${containerDimensions.width}px` : '100%',
                height: containerDimensions.height ? `${containerDimensions.height}px` : '90vh',
                maxWidth: '1200px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mx: { xs: 2, sm: 4, md: 6 },
              }}
            >
              <Box
                component="img"
                src={`${baseUrl}images/invite_vertical.png`}
                alt="Wedding Invitation"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </Box>
          </Box>
        )}
      </AnimatePresence>

      <Container
        ref={containerRef}
        component={motion.main}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, delay: 0.1, ease: "easeOut"}}
        sx={{ 
          position: 'relative',
          maxWidth: '1200px !important',
          px: { xs: 2, sm: 4, md: 6 },
          mx: 'auto',
          width: '100%',
          minHeight: '100vh',
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
            py: { xs: 8, sm: 8 },  
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
              ...(isPortrait ? {
                top: '10px',
                left: '10px',
                width: '72px',
                height: '72px',
              } : {
                top: { xs: '-70px', sm: 20 },
                left: { xs: '10px', sm: 20 },
                width: { xs: 144, sm: 150, md: 150 },
                height: { xs: 144, sm: 150, md: 150 },
              }),
              objectFit: 'contain',
              zIndex: 1,
              display: { xs: 'block', sm: 'block' },
            }}
          />
          <Box
            component="img"
            src={`${baseUrl}images/buckwheat1.PNG`}
            alt="Buckwheat the cat"
            sx={{
              position: 'absolute',
              ...(isPortrait ? {
                top: '10px',
                right: '10px',
                width: '72px',
                height: '72px',
              } : {
                top: { xs: '-70px', sm: 20 },
                right: { xs: '10px', sm: 20 },
                width: { xs: 144, sm: 150, md: 150 },
                height: { xs: 144, sm: 150, md: 150 },
              }),
              objectFit: 'contain',
              zIndex: 1,
              display: { xs: 'block', sm: 'block' },
            }}
          />
          <Box
            component="img"
            src={`${baseUrl}images/biscuit1.PNG`}
            alt="Biscuit the dog"
            sx={{
              position: 'absolute',
              ...(isPortrait ? {
                display: 'none'
              } : {
                bottom: { xs: 10, sm: 20 },
                right: { xs: 10, sm: 20 },
                width: { xs: 144, sm: 150, md: 150 },
                height: { xs: 144, sm: 150, md: 150 },
                display: { xs: 'block', sm: 'block' },
              }),
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
              ...(isPortrait ? {
                display: 'none'
              } : {
                bottom: { xs: 10, sm: 20 },
                left: { xs: 10, sm: 20 },
                width: { xs: 144, sm: 150, md: 150 },
                height: { xs: 144, sm: 150, md: 150 },
                display: { xs: 'block', sm: 'block' },
              }),
              objectFit: 'contain',
              zIndex: 1,
            }}
          />

          <Box
            sx={{
              mb: 4,
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                mb: 1,
                fontFamily: '"Playfair Display", serif',
              }}
            >
              Richard & Emily
            </Typography>
            
            <Typography
              variant="h4"
              sx={{
                fontFamily: '"Playfair Display", serif',
              }}
            >
              are getting married!
            </Typography>
          </Box>

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
              src={`${baseUrl}images/Richard and Emily 1.jpg`}
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
              p: { xs: 2, sm: 4 },  
              maxWidth: '100%',      
              width: '100%',
              textAlign: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              mx: { xs: 2, sm: 'auto' },  
              boxSizing: 'border-box'      
            }}
          >
            <Typography variant="h5" gutterBottom>
              Join us
            </Typography>
            <Typography
              variant="h3"
              sx={{
                mt: 1,
                mb: 2,
                color: 'secondary.main',
                fontFamily: '"Playfair Display", serif',
                fontStyle: 'italic'
              }}
            >
              May 17th, 2025
            </Typography>
            <Typography variant="h6" sx={{ mb: 1 }}>
              In our backyard at
            </Typography>
            <Typography variant="subtitle1">
              4390 Jana Vista Rd,<br />
              El Sobrante, CA 94803
            </Typography>
          </Paper>

          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/rsvp')}
            sx={{
              mt: 4,
              mb: 2,
              px: 4,
              py: 1.5,
              fontSize: '1.2rem',
              fontFamily: '"Playfair Display", serif',
              backgroundColor: 'secondary.main',
              color: 'white',
              '&:hover': {
                backgroundColor: 'secondary.dark',
              },
              borderRadius: 2,
              boxShadow: 2,
            }}
          >
            RSVP Now
          </Button>

          <Typography
            variant="caption"
            sx={{
              mt: 4,
              textAlign: 'center',
              opacity: 0.7,
              fontStyle: 'italic'
            }}
          >
            Illustrations by Emily.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Home;