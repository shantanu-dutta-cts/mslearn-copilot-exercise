// Create web server
// 1. Create a web server
// 2. Create a route for '/'
// 3. Create a route for '/comments'
// 4. Create a route for '/comments/:commentId'
// 5. Create a route for '/comments/:commentId/:commentProperty'

const express = require('express');
const app = express();

// 2. Create a route for '/'
app.get('/', (req, res) => {
  res.send('Welcome to the comments page');
});

// 3. Create a route for '/comments'
app.get('/comments', (req, res) => {
  res.send('This is where you can view all comments');
});

// 4. Create a route for '/comments/:commentId'
app.get('/comments/:commentId', (req, res) => {
  res.send(`This is comment ${req.params.commentId}`);
});

// 5. Create a route for '/comments/:commentId/:commentProperty'
app.get('/comments/:commentId/:commentProperty', (req, res) => {
  res.send(`This is the ${req.params.commentProperty} of comment ${req.params.commentId}`);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// Test in browser
// http://localhost:3000/comments/123
// http://localhost:3000/comments/123/author

// Test in terminal
// curl http://localhost:3000/comments/123
// curl http://localhost:3000/comments/123/author
// curl http://localhost:3000/comments/123/author/123