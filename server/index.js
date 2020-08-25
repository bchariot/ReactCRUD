const data = require('./dataFiles/testdata.json');

const express = require('express');
const app = express();

const port = 5000;

//for dev and test
app.get('/api/data', (req, res) => {
    res.json(data);
});

// for production
app.get('/data', (req, res) => {
    res.json(data);
});

app.listen(port, () => console.log(`Server started on port ${port}`));
