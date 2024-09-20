import { Box, Chip } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const SystemStatus = () => (
  <Box mt={4}>
    <Chip 
      icon={<CheckCircleIcon />} 
      label='All Systems Operational' 
      color='success'
      sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }} 
    />
  </Box>
);
