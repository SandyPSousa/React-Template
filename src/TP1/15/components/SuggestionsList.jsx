import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';

export default function SuggestionsList({ suggestions }) {
  return (
    
    <List>
      <p><strong>Sugestões de Amizade</strong></p>
      {suggestions.map(suggestion => (
        <ListItem key={suggestion.id}>
          <ListItemAvatar>
            <Avatar src={suggestion.avatar} />
          </ListItemAvatar>
          <ListItemText primary={suggestion.name} secondary={`Amigo em comum: ${suggestion.mutualFriends}`} />
        </ListItem>
      ))}
     
    </List>
  );
}
