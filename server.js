const express = require('express');
const path = require('path')
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

// Serve the HTML file for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, ()=>{
    console.log(`Users App is listening on ${PORT}`)
})