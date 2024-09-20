import { Box, TextField, Button } from '@mui/material';

export const ContactForm = () => (
  <Box display='flex' flexDirection='column' alignItems='start'>
    <TextField label='Enter your email address' variant='outlined' sx={{ mb: 2, bgcolor: 'white' }} />
    <TextField label='Enter your message' variant='outlined' sx={{ mb: 2, bgcolor: 'white' }} />
    <Button variant='contained' color='primary'>Send</Button>
  </Box>
);
