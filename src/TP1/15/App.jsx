import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Feed from './components/Feed';
import FriendsList from './components/FriendsList';
import SuggestionsList from './components/SuggestionsList';
import { Container, Grid2 } from '@mui/material';

export default function App() {
  const posts = [
    {
      id: 1,
      author: { name: "Ana", avatar: "https://img.freepik.com/free-vector/smiling-woman-with-long-hair_1308-174705.jpg?t=st=1728053635~exp=1728057235~hmac=ac0dc75bec917a7afc1e9241f0864d6a75959e5fe3ea585d1f4cfe0e92f28a9d&w=360" },
      title: "Passeio no parque",
      text: " dia incrível!",
      date: "10/04/2024",
      image: "https://img.freepik.com/free-photo/young-adults-having-fun-while-folk-dancing_23-2149849724.jpg?t=st=1728054013~exp=1728057613~hmac=8a97765c9e68067fffffe663bc73d6abf642cb6efb760ba774b4ce02f24c4179&w=360",
      likes: 10,
      shares: 2,
      comments: [
        { id: 1, author: "João", text: "Que legal!" },
        { id: 2, author: "Maria", text: "Adorei a foto!" }
      ]
    },
    {
      id: 2,
      author: { name: "Pedro", avatar: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?t=st=1728053555~exp=1728057155~hmac=6bf692f95bdb065a6fc4b7588b928b54341678bda141c45cf43cf82954c570c9&w=740" },
      title: "Show maneiro",
      text: "#rocknroll",
      date: "08/10/2024",
      image: "https://img.freepik.com/free-photo/close-up-recording-video-with-smartphone-concert-toned-picture_1153-6815.jpg?t=st=1728053959~exp=1728057559~hmac=78462b6caebb9650f3fb0deeb825116dc7f1eb5b579c14f7ccd6fcaa513c8d1e&w=360",
      likes: 10,
      shares: 2,
      comments: [
        { id: 1, author: "João", text: "Que legal!" },
        { id: 2, author: "Maria", text: "Adorei a foto!" }
      ]
    },
    {
      id: 3,
      author: { name: "Julia", avatar: "https://img.freepik.com/free-vector/smiling-girl-with-freckles_1308-173252.jpg?t=st=1728053722~exp=1728057322~hmac=0a71c809eca13d0a0ea330cf24ddda1092beced5b4c53a3c83a833c616627111&w=360" },
      title: "Pôr do Sol",
      text: "Hoje foi uma tarde linda!",
      date: "09/10/2024",
      image: "https://img.freepik.com/free-photo/beautiful-sunset-lake-with-greenery-coast-amazing-cloudy-sky_181624-3746.jpg?t=st=1728053909~exp=1728057509~hmac=21f332ea43cd25e801b49de074f1c97a01d8ff84aaf5f96822a759556eb27404&w=360",
      likes: 10,
      shares: 2,
      comments: [
        { id: 1, author: "João", text: "Que legal!" },
        { id: 2, author: "Maria", text: "Adorei a foto!" }
      ]
    },
  ];

  const friends = [
    { id: 1, name: "Pedro", avatar: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?t=st=1728053555~exp=1728057155~hmac=6bf692f95bdb065a6fc4b7588b928b54341678bda141c45cf43cf82954c570c9&w=740", mutualFriends: 5 },
    { id: 2, name: "Julia", avatar: "https://img.freepik.com/free-vector/smiling-girl-with-freckles_1308-173252.jpg?t=st=1728053722~exp=1728057322~hmac=0a71c809eca13d0a0ea330cf24ddda1092beced5b4c53a3c83a833c616627111&w=360", mutualFriends: 8 },
    { id: 3, name: "Ana", avatar: "https://img.freepik.com/free-vector/smiling-woman-with-long-hair_1308-174705.jpg?t=st=1728053635~exp=1728057235~hmac=ac0dc75bec917a7afc1e9241f0864d6a75959e5fe3ea585d1f4cfe0e92f28a9d&w=360", mutualFriends: 2 }
  ];

  const suggestions = [
    { id: 1, name: "Carlos", avatar: "https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?t=st=1728053780~exp=1728057380~hmac=bfb62bfa2cdce1b9acfa5c1b07c9865c7006151695a7e8b0434f41c4e7638d14&w=740", mutualFriends: "Lucas" },
    { id: 2, name: "Carol", avatar: "https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?t=st=1728053780~exp=1728057380~hmac=bfb62bfa2cdce1b9acfa5c1b07c9865c7006151695a7e8b0434f41c4e7638d14&w=740", mutualFriends: "Pedro" },
    { id: 3, name: "João", avatar: "https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?t=st=1728053780~exp=1728057380~hmac=bfb62bfa2cdce1b9acfa5c1b07c9865c7006151695a7e8b0434f41c4e7638d14&w=740", mutualFriends: "Ana" }
  ];

  return (
    <Container>
      <Header />
      <Grid2 container spacing={2}>
        <Grid2 item xs={12} md={3}>
          <Menu />
          <FriendsList friends={friends} />
        </Grid2>
        <Grid2 item xs={12} md={6}>
          <Feed posts={posts} />
        </Grid2>
        <Grid2 item xs={12} md={3}>
          <SuggestionsList suggestions={suggestions} />
        </Grid2>
      </Grid2>
    </Container>
  );
}

