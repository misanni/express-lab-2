const { response } = require("express");
const express = require("express");
const app=express();
app.get("/", (request, response)=>{
    response.send(`99 bottles of beer on the wall <br> <a href="/98">Take one down, pass it around </a> `)
})

app.get('/0', (request, response)=>{
    response.send(`Zero bottles of beer on the wall <a href="/">Start over</a>`)
})
app.get('/:number_of_bottles', (request, response)=>{
    response.send(`${request.params.number_of_bottles} Bottles of beer on the wall<br> <a href="${request.params.number_of_bottles -1}">Take one down, pass it around</a>`)
})

app.listen(3001,()=>{
    console.log("server is listening to port...")
});
