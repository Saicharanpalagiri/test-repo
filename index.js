const express = require('express');
const app = express();

app.get('/', (req, res) => {return res.send("Hello,How are you???")})

app.get('/hello', (req, res) => {return res.send("hello who r u????")})


//port
app.listen(3000, ()=>{console.log("Listening at port 3000...")})