import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
const  Header = (props) => {
  return (
    <>
    <CssBaseline/>
    <ElevationScroll {...props}>
      <AppBar sx={{ background: '#ec407a'}}>
        <Toolbar>
          <Typography 
          variant="h6" 
          component="div"
          sx={{ fontWeight: 'bold' , margin:'auto'}}>
              It's Shopping time
          </Typography>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
    <Toolbar />
    
  </>
  )
}

export default Header
// FakeShop