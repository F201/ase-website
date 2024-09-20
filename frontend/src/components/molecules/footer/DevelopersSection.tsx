import { Box, Avatar, Typography } from '@mui/material';

const developers = [
  '/path-to-avatar1', '/path-to-avatar2', '/path-to-avatar3', '/path-to-avatar4'
];

export const DevelopersSection = () => (
  <Box display='flex' flexDirection='column' alignItems='start' mt={4}>
    <Typography variant='subtitle1' color='white'>
      Our Developers
    </Typography>
    <Box display='flex' mt={2}>
      {developers.map((dev, index) => (
        <Avatar src={dev} alt={`dev-${index}`} key={index} sx={{ marginRight: 2, width: 48, height: 48 }} />
      ))}
    </Box>
  </Box>
);
