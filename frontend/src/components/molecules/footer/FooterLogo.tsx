import { Box, Typography } from '@mui/material';

export const FooterLogo = () => (
  <Box display='flex' flexDirection='column' alignItems='start'>
    <img src='/path-to-logo' alt='logo' style={{ width: '150px' }} />
    <Typography variant='subtitle1' color='white' mt={2}>
      Advanced Software Engineering LABORATORY
    </Typography>
  </Box>
);
