const express = require('express');
const server = express();
const imgs = require('./src/data/img.json')

server.get('/imgs',(req,res) =>{
    return res.json(imgs)
})

server.listen(3000, ()=>{
    console.log("Funciona")
    console.log("Funciona")
});

