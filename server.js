const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
	res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
	/*console.log(req.body);
	console.log(req.body.num1);*/
	var n1 = Number(req.body.num1);
	var n2 = Number(req.body.num2);
	var result = n1 + n2;
	res.send("The answer is " + result);
});

/*app.get("/about", function(req, res){
	res.send("<h1>This is Tanushree Dhongale</h1><h3>Currently doing B.Tech in 2nd Year</h3>");
});
***by writing "localhost:3000/about" you can access the about response
app.get("/shapeai", function(req, res){
	res.send("<h1>ShapeAI</h1>");
});*/

app.listen(3000, function(){
	console.log("Server has started on port 3000");
});
