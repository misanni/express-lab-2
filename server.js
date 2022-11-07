
const { response } = require("express");
const express = require("express");
const app=express();
//http://localhost:3000/greeting/Mary
app.get('/greeting/:name', (request, response)=>{
    response.send("What's up " +  request.params.name + " ! It's so great to see you")
});
//app.get('/tip/:total/:tipPercentage', (request, response)=>{
//    var first=parseInt(request.params.tipPercentage)
//    var second=parseInt(request.params.total)
  
//    response.send((first /100) * second);
//});
app.get('/tip/:total/:tipPercentage', (req, res) => {
	console.log(req.params);
    var first = parseInt(req.params.total)
    var second =parseInt(req.params.tipPercentage)
    var total= (second/100)*first
	res.send('hello ' + total);
});

app.get('/magic/:question',(req, res)=> {
    function get_random (answer) {
        return answer[Math.floor((Math.random()*answer.length))];
      }
res.send
      returns = get_random(["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"])
      res.send(` ${req.params.question}, <br>  <h1>${returns} </h1>`)
});

app.listen(3000,()=>{
    console.log("server is listening to port...")
});
