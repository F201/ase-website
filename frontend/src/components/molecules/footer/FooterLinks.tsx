import { Box, Typography, Link } from '@mui/material';

const links = [
  { title: 'Contents', items: ['Home'] },
  { title: 'Our Activity', items: ['Research', 'Projects'] },
  { title: 'About Us', items: ['About Us', 'Members', 'Partners', 'Contact Us'] }
];

export const FooterLinks = () => (
  <Box display='flex' justifyContent='space-between'>
    {links.map((linkGroup, index) => (
      <Box key={index} mx={4}>
        <Typography variant='h6' color='white' gutterBottom>{linkGroup.title}</Typography>
        {linkGroup.items.map((item, idx) => (
          <Link href='#' variant='body2' color='secondary' display='block' key={idx} mt={1}>
            {item}
          </Link>
        ))}
      </Box>
    ))}
  </Box>
);
