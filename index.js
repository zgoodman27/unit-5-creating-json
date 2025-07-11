const express = require('express');
const app = express();

const PORT = 3000;

// check if the server is running
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// get answers from the JSON file
app.get("/answers", (req, res) => {
    res.sendFile(__dirname + '/api/answers.json');
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});