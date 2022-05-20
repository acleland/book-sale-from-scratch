import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useBooks } from '../../hooks/books';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';

const theme = createTheme();

export default function NewBook() {
  const { add } = useBooks();
  const history = useHistory();

  const [book, setBook] = useState({
    title: '',
    author: '',
    genre: '',
    description: '',
    price: '',
    material: '',
    image: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await add(book);
      history.push('/');
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h2>Add a new book below:</h2>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="title"
                  name="title"
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  autoFocus
                  value={book.title}
                  onChange={(e) => setBook({ ...book, title: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="author"
                  label="Author"
                  name="author"
                  autoComplete="author"
                  value={book.author}
                  onChange={(e) => setBook({ ...book, author: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="genre"
                  label="Genre"
                  name="Genre"
                  autoComplete="genre"
                  value={book.genre}
                  onChange={(e) => setBook({ ...book, genre: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="price"
                  label="Price"
                  name="price"
                  autoComplete="price"
                  value={book.price}
                  onChange={(e) => setBook({ ...book, price: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="description"
                  label="Description"
                  name="description"
                  autoComplete="description"
                  value={book.description}
                  onChange={(e) =>
                    setBook({ ...book, description: e.target.value })
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
          <Link color="inherit" href="/books" style={{ margin: '20px' }}>
            Back to Books!
          </Link>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
