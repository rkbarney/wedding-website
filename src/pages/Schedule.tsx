import { Container, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const Schedule = () => {
  const events = [
    {
      time: '4:00 PM',
      title: 'Arrive',
      description: 'Join us as we welcome you to our celebration'
    },
    {
      time: '4:30 PM',
      title: 'Ceremony',
      description: 'Gather with us as we exchange our vows'
    },
    {
      time: '5:00 PM',
      title: 'Mingle & Appetizers',
      description: 'Enjoy light refreshments and conversation'
    },
    {
      time: '6:00 PM',
      title: 'Dinner',
      description: 'Celebrate with us over a delicious meal'
    }
  ];

  return (
    <Container>
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
          gap: 4
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            mb: 6,
            textAlign: 'center',
            fontFamily: '"Playfair Display", serif',
          }}
        >
          Schedule of Events
        </Typography>

        {events.map((event, index) => (
          <Paper
            key={event.time}
            component={motion.div}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            elevation={3}
            sx={{
              p: 4,
              width: '100%',
              maxWidth: 600,
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: '"Playfair Display", serif',
                color: 'primary.main'
              }}
            >
              {event.time}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Playfair Display", serif',
              }}
            >
              {event.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                opacity: 0.8
              }}
            >
              {event.description}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default Schedule;
