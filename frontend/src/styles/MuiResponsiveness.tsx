import { Box, styled } from '@mui/material';

const StyledBox = styled(Box)(({ theme }) => ({
  height: '100%',
  width: '100%',
  backgroundColor: theme.status.danger,
})) 

export const MuiResponsiveness = () => {
  return (
    <>
      <Box 
        sx={{
          height: '300px',
          width: {
            xs: 100,
            sm: 200,
            md: 300,
            lg: 400,
            xl: 500,
          },
          bgcolor : 'secondary.dark',
        }}
      ></Box>
      <StyledBox />
      
    </>
  )
}