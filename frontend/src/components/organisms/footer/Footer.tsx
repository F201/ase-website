import { Box, Container } from '@mui/material';
import { FooterLogo } from '@molecules/footer/FooterLogo';
import { FooterLinks } from '@molecules/footer/FooterLinks';
import { DevelopersSection } from '@molecules/footer/DevelopersSection';
import { SystemStatus } from '@molecules/footer/SystemStatus';
import { ContactForm } from '@molecules/footer/ContactForm';
import { SocialMediaLinks } from '@molecules/footer/SocialMediaLinks';
import { CopyrightText } from '@molecules/footer/CopyrightText';

export const Footer = () => (
  <Container maxWidth={false} disableGutters sx={{position:'fixed', bottom:0}} >
    <Box display='flex' justifyContent='space-between'>
      <Box sx={{ border: '1px solid red', padding: '16px' }}> {/* Outline for the first box */}
        <FooterLogo />
        <DevelopersSection />
        <SystemStatus />
      </Box>
      <Box sx={{ border: '1px solid blue', padding: '16px' }}> {/* Outline for the footer links */}
        <FooterLinks />
      </Box>
      <Box sx={{ border: '1px solid green', padding: '16px' }}> {/* Outline for the contact form */}
        <ContactForm />
      </Box>
    </Box>
    <Box sx={{ border: '1px solid purple', marginTop: '16px', padding: '16px' }}> {/* Outline for the social media links */}
      <SocialMediaLinks />
    </Box>
    <Box sx={{ border: '1px solid orange', marginTop: '16px', padding: '16px' }}> {/* Outline for the copyright text */}
      <CopyrightText />
    </Box>
  </Container>
);
