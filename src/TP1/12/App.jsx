import React, { useState } from 'react';
import {
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
  AppBar,
  Toolbar,
  Paper,
} from '@mui/material';
import './main.css';

export default function App() {
  const [items] = useState([
    { name: 'Notebook', unitPrice: 1500, quantity: 1, description: '14 inch, Intel i5' },
    { name: 'Textbooks', unitPrice: 200, quantity: 3, description: 'Various subjects' },
    { name: 'Backpack', unitPrice: 50, quantity: 1, description: 'Durable, 30L capacity' },
    { name: 'Pens', unitPrice: 5, quantity: 10, description: 'Black ink, 0.7mm' },
    { name: 'Laptop Charger', unitPrice: 30, quantity: 1, description: 'Compatible with most laptops' },
  ]);

  const [darkMode, setDarkMode] = useState(false);

  const totalPurchase = items.reduce(
    (acc, item) => acc + item.unitPrice * item.quantity,
    0
  );

  const totalItems = items.length;
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Container className={darkMode ? 'dark' : 'light'} maxWidth="sm">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Shopping Cart
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: darkMode ? '#222' : 'primary.main',
              color: 'white',
              borderRadius: 20,
              '&:hover': {
                backgroundColor: darkMode ? '#111' : 'primary.dark',
              },
            }}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </Toolbar>
      </AppBar>
      <Paper elevation={3} sx={{ padding: 2, marginTop: 2, backgroundColor: darkMode ? '#444' : '#fff', color: darkMode ? '#fff' : '#000' }}>
        <Typography variant="h6" sx={{ marginBottom: 2, color: darkMode ? '#fff' : '#000' }}>
          Total Items: {totalItems} | Total Quantity: {totalQuantity}
        </Typography>
        
        <List>
          {items.map((item, index) => (
            <ListItem key={index} sx={{ borderBottom: '1px solid black' }}>
              <ListItemText
                primary={
                  <Typography sx={{ fontWeight: 'bold', color: darkMode ? '#fff' : '#000' }}>
                    {item.name}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography component="span" sx={{ color: darkMode ? '#fff' : '#000' }}>
                      <strong>Unit Price:</strong> R${item.unitPrice} | 
                      <strong> Quantity:</strong> {item.quantity} | 
                      <strong> Total:</strong> R${item.unitPrice * item.quantity}
                      <br />
                      {item.description}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
        <Typography variant="h6" sx={{ marginTop: 2, color: darkMode ? '#fff' : '#000' }}>
          <strong>Total Purchase:</strong> R${totalPurchase}
        </Typography>
      </Paper>
    </Container>
  );
}







