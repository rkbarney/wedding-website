import { Container, Typography, Box } from '@mui/material';

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
        <Box 
          component="iframe"
          src="https://www.myregistry.com/wedding-registry/richard-barney-and-emily-sheehy-wilkins-/4650913"
          sx={{
            width: '100%',
            height: '800px',
            border: 'none',
            mt: 2,
            backgroundColor: 'transparent'
          }}
        />
      </Box>
    </Container>
  );
};

export default Registry;
