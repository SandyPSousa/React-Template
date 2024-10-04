// import React from 'react';
// import { Card, CardHeader, CardContent, CardMedia, Avatar, Typography, IconButton } from '@mui/material';
// import { ThumbUp, Share } from '@mui/icons-material';

// export default function Post({ post }) {
//   return (
//     <Card sx={{ marginBottom: 2 }}>
//       <CardHeader
//         avatar={<Avatar src={post.author.avatar} />}
//         title={post.author.name}
//         subheader={post.date}
//       />
//       <CardMedia
//         component="img"
//         image={post.image}
//         alt={post.title}
//       />
//       <CardContent>
//         <Typography variant="h6">{post.title}</Typography>
//         <Typography variant="body2">{post.text}</Typography>
//         <div>
//           <IconButton>
//             <ThumbUp /> {post.likes}
//           </IconButton>
//           <IconButton>
//             <Share /> {post.shares}
//           </IconButton>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

import React from 'react';
import { Card, CardHeader, CardContent, CardMedia, Avatar, Typography, IconButton, List, ListItem, ListItemText } from '@mui/material';
import { ThumbUp, Share } from '@mui/icons-material';

export default function Post({ post }) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardHeader
        avatar={<Avatar src={post.author.avatar} />}
        title={post.author.name}
        subheader={post.date}
      />
      <CardMedia
        component="img"
        image={post.image}
        alt={post.title}
      />
      <CardContent>
        <Typography variant="h6">{post.title}</Typography>
        <Typography variant="body2">{post.text}</Typography>
        <div>
          <IconButton>
            <ThumbUp /> {post.likes}
          </IconButton>
          <IconButton>
            <Share /> {post.shares}
          </IconButton>
        </div>

       
        <Typography variant="h6" sx={{ marginTop: 2 }}>Comentários:</Typography>
        {post.comments && post.comments.length > 0 ? (
          <List>
            {post.comments.map(comment => (
              <ListItem key={comment.id}>
                <ListItemText
                  primary={comment.author}
                  secondary={comment.text}
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant="body2">Sem comentários</Typography>
        )}
      </CardContent>
    </Card>
  );
}
