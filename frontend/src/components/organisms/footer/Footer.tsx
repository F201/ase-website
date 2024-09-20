import { Box, Container } from '@mui/material';
import { FooterLogo } from '@molecules/footer/FooterLogo';
import { FooterLinks } from '@molecules/footer/FooterLinks';
import { DevelopersSection } from '@molecules/footer/DevelopersSection';
import { SystemStatus } from '@molecules/footer/SystemStatus';
import { ContactForm } from '@molecules/footer/ContactForm';
import { SocialMediaLinks } from '@molecules/footer/SocialMediaLinks';
import { CopyrightText } from '@molecules/footer/CopyrightText';

export const Footer = () => (
  <Box sx={{ bgcolor: 'common.black', py: 8 }}>
    <Container maxWidth='lg'>
      <Box display='flex' justifyContent='space-between'>
        <Box>
          <FooterLogo />
          <DevelopersSection />
          <SystemStatus />
        </Box>
        <FooterLinks />
        <ContactForm />
      </Box>
      <SocialMediaLinks />
      <CopyrightText />
    </Container>
  </Box>
);
