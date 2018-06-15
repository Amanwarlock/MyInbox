"use strict;"
const express = require("express");
const config = require("./config.json");
const path = require("path");
const port = config.port ? config.port : 6000;
const app = express();

app.use(express.static(path.join(__dirname, '/frontend')));

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname , `/src/index.html`));
})



app.listen(port , () => console.log(`Server started on http://localhost:${port}`));