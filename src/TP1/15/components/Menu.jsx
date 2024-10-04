import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

export default function Menu() {
  return (
    <List>
      <ListItem button>
        <ListItemText primary="Página Inicial" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Perfil" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Mensagens" />
      </ListItem>
    </List>
  );
}
