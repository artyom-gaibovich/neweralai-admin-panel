const express = require('express')
const cors = require("cors")
const axios = require("axios");
const {json} = require("express");

const app = express()
app.use(cors({
    origin: 'http://localhost:5173', // Замените на адрес вашего React-приложения
    methods: 'GET,POST,PUT,DELETE',
}));
app.use(express.json())

app.get("/api/v1/categories/get", (req, response) => {
    const result = axios.get("http://localhost:7070/api/v1/categories/get")
    result.then(res => response.send(res.data))
})
const port = 2020
app.listen(port, () => {
    console.log('server is started', port)
})