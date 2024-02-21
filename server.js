// https://glitch.com/dashboard
const express = require('express');
const app = express();

app.get('/', function(req, res) {
    // Log the timestamp of the request
    console.log(`GET request at ${new Date().toISOString()}`);
    
    // Replace with the actual URL of your image
    const imageUrl = 'https://www.creativefabrica.com/wp-content/uploads/2021/01/29/easter-egg-icon-Graphics-8169408-1-580x387.jpg';
    res.redirect(imageUrl);
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log(`Server is listening on port ${port}`);
});