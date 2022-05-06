import React from 'react'
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
export const Spinner = () => {
  return (
   <>
    <Box sx={{ position: 'absolute', top: '20vw', right: '51vw' }}>
      <CircularProgress />
    </Box>
    </>
  )
}
