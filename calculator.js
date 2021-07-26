const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res)
{
    res.sendFile(__dirname + "/index.html");
});2
app.post("/",function(req,res)
{
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1+num2;
    res.send("The result is "+result);
});

app.get("/BMICalculator",function(req,res)
{
    res.sendFile(__dirname+"/BMICalculator.html");
});

app.post("/BMICalculator",function(req,res)
{
    var height=parseFloat(req.body.height);
    var weight=parseFloat(req.body.weight);

    var result=weight/(height*height);

    res.send("The BMI is "+result);

})
app.listen(3000,function()
{
    console.log("server started on port 3000");
});