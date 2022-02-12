import { Button } from '@mui/material';
import * as React from 'react';
import { Toolbar } from '@mui/material';
import { AppBar } from '@mui/material';
import Typography from '@mui/material/Typography';
export default function Header() {

console.log("Hello");
console.log("Changed");
  return (
    <>
     <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            NineLeaps
          </Typography>
        </Toolbar>
      </AppBar>
     
    </>
  );
}
