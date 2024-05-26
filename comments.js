// Create web server
// Create a web server that listens on port 3000 and has the following routes:
// * GET /: returns a welcome message
// * GET /comments: returns a list of comments
// * POST /comments: creates a new comment
// * GET /comments/:id: returns a specific comment
// * PUT /comments/:id: updates a specific comment
// * DELETE /comments/:id: deletes a specific comment
// Use an array to store the comments.

// Start your server using nodemon

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;

app.use(bodyParser.json());

const comments = [
    {
        id: 1,