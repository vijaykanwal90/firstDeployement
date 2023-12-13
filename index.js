// console.log("hello world")
const express = require('express')
const app = express()
require('dotenv').config();

const port = process.env.PORT || 9001
app.get('/', (req, res)=>{
    res.send("Hello world!")
})
app.get('/login', (req, res)=>{
    res.send("welcome to login page")
})
app.listen(process.env.PORT , ()=>{
console.log(`Server listening on port ${process.env.PORT}`)
})
