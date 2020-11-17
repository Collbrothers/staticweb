const express = require('express');
const helmet = require('helmet')
const path = require("path");

const app = express()

app.use(helmet())

app.get("/logs/satisfactory/FactoryGame.log", (req, res) => {
    res.sendFile(path.join(__dirname, "../Client/satisfactory/FactoryGame.log"))
})