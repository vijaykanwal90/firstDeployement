// console.log("hello world")
const express = require('express')
const app = express()
const PORT = 3000
app.get('/', (req, res)=>{
    res.send("Hello world!")
})
app.get('/login', (req, res)=>{
    res.send("welcome to login page")
})
app.listen(PORT , ()=>{
console.log("Server listening on port ${PORT}")
})
