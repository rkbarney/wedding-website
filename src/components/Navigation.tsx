import { Box, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        py: 2,
        px: 3,
        backgroundColor: 'transparent'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: { xs: 2, sm: 4 },
          justifyContent: 'center',
          maxWidth: '1200px',
          width: '100%'
        }}
      >
        {[
          { path: '/', label: 'HOME' },
          { path: '/schedule', label: 'SCHEDULE' },
          { path: '/rsvp', label: 'RSVP' },
          { path: '/registry', label: 'REGISTRY' },
          { path: '/faq', label: 'FAQ' },
        ].map(({ path, label }) => (
          <Button
            key={path}
            component={Link}
            to={path}
            sx={{
              color: 'text.primary',
              textDecoration: 'none',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              opacity: location.pathname === path ? 1 : 0.7,
              '&:hover': {
                opacity: 1,
                backgroundColor: 'transparent'
              },
              letterSpacing: '0.05em'
            }}
          >
            {label}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Navigation;
