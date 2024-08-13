const express = require ("express");
const hbs = require ("hbs");
const path = require("path")


const app = express();
const weatherData = require("../utils/WeatherData");
const { error } = require("console");

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

app.listen(port,()=>{
  console.log("listeninig server" +port);
});