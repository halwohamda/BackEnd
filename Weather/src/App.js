const express = require ("express");
const hbs = require ("hbs");
const path = require("path")


const app = express();
const weatherData = require("../utils/WeatherData");
// const { error } = require("console");
const publicPath = path.join(__dirname,"../public");
const viewPath = path.join(__dirname,"../templates/view");
const partialsPath = path.join(__dirname,"../templates/partials");
app.set("view engine","jade");
app.set("view",viewPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicPath));
const port = process.env.PORT ||4000;

app.get("/", (req,res)=>{
    res.send("hello this is my first app");
});

app.get("/weather", (req,res)=>{
  if (!req.query. address){
    return res.send("Address is required");
  }
    weatherData(req.query. address ,(error, result)=>{
      if (error){
        return res.send(error);
      }
      res.send(result)
    })
});

app.get("*",(req,res)=>{
  res.send("this route doesnot exist")
})


app.listen(port,()=>{
  console.log("listeninig server" + port);
});