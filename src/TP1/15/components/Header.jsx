import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="static"
    sx={{ 
      background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);' 
    }}>
      <Toolbar>
        <Typography variant="h6">Minha Rede Social</Typography>
      </Toolbar>
    </AppBar>
  );
}
