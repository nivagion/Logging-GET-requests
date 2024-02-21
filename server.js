// https://glitch.com/dashboard
const express = require('express');
const app = express();

app.get('/', function(req, res) {
    // Log the timestamp of the request
    console.log(`GET request at ${new Date().toISOString()}`);
    
    // Replace with the actual URL of your image
    const imageUrl = 'https://tenor.com/view/what-the-hell-gif-8356693125066769156';
    res.redirect(imageUrl);
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log(`Server is listening on port ${port}`);
});