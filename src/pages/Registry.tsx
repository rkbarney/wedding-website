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
            mb: 2,
            textAlign: 'center',
            maxWidth: 600,
            mx: 'auto',
          }}
        >
          Your presence at our wedding is the greatest gift of all. However, if
          you wish to honor us with a gift, we have created registries at Heath Ceramics
          and MyRegistry.com.
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', mb: 4 }}>
          <Button
            variant="contained"
            color="primary"
            href="https://heathceramics.myshopify.com/apps/registry/richard-and-emilys-wedding?shared_url=true"
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
            Heath Ceramics Registry
          </Button>

          <Button
            variant="contained"
            color="primary"
            href="https://www.myregistry.com/giftlist/richardandemily"
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
            MyRegistry.com Registry
          </Button>
        </Box>

        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            maxWidth: 600,
            mx: 'auto',
            color: 'text.secondary'
          }}
        >
          If you prefer to send a gift digitally, we can be found on Venmo (@rkbarney - Richard, @Emily-Sheehy-Wilkins - Emily).
        </Typography>
      </Box>
    </Container>
  );
};

export default Registry;
