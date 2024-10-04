import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';

export default function FriendsList({ friends }) {
  return (
    <List>
       <p><strong>Amigos</strong></p>
      {friends.map(friend => (
        <ListItem key={friend.id}>
          <ListItemAvatar>
            <Avatar src={friend.avatar} />
          </ListItemAvatar>
          <ListItemText primary={friend.name} secondary={`${friend.mutualFriends} amigos em comum`} />
        </ListItem>
      ))}
    </List>
  );
}
