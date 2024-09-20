import { Box, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const SocialMediaLinks = () => (
  <Box mt={4} display='flex' justifyContent='center'>
    <IconButton color='primary'>
      <YouTubeIcon />
    </IconButton>
    <IconButton color='primary'>
      <InstagramIcon />
    </IconButton>
    <IconButton color='primary'>
      <LinkedInIcon />
    </IconButton>
  </Box>
);
