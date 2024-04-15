// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route for the root path
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

// Path: comments.js
// Create a route for the /comments path
app.get('/comments', (req, res) => {
    res.send('Comments');
});

// Path: comments.js
// Create a route for the /comments/:id path
app.get('/comments/:id', (req, res) => {
    res.send(`Comment ${req.params.id}`);
});

// Path: comments.js
// Create a route for the /comments/:id/edit path
app.get('/comments/:id/edit', (req, res) => {
    res.send(`Edit Comment ${req.params.id}`);
});

// Path: comments.js
// Export the express app
module.exports = app;

// Path: index.js
// Import the express app from comments.js
const commentsApp = require('./comments');

// Mount the comments app on the /comments path
app.use('/comments', commentsApp);

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

// Path: comments.js
// Create a route for the /comments path
app.get('/', (req, res) => {
    res.send('Comments');
});

// Path: comments.js
// Create a route for the /comments/:id path
app.get('/:id', (req, res) => {
    res.send(`Comment ${req.params.id}`);
});

// Path: comments.js
// Create a route for the /comments/:id/edit path
app.get('/:id/edit', (req, res) => {
    res.send(`Edit Comment ${req.params.id}`);
});

// Path: index.js
// Import the express app from comments.js
const commentsApp = require('./comments');

// Mount the comments app on the /comments path
app.use('/comments', commentsApp);

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

// Path: comments.js
// Create a route for the /comments path
app.get('/', (req, res) => {
    res.send('Comments');
});

// Path: comments.js