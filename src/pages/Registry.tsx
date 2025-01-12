import { Container, Typography, Box, Button } from '@mui/material';

const Registry = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
            mb: 4,
            textAlign: 'center',
            maxWidth: 600,
            mx: 'auto',
          }}
        >
          Your presence at our wedding is the greatest gift of all. However, if
          you wish to honor us with a gift, we have created a registry at MyRegistry.com
        </Typography>

        <Button
          variant="contained"
          color="primary"
          href="https://www.myregistry.com/wedding-registry/richard-barney-and-emily-sheehy-wilkins-/4650913"
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
          View Our Registry
        </Button>
      </Box>
    </Container>
  );
};

export default Registry;
