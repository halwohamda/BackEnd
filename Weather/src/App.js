const express = require("express");
const hbs = require ("hbs");
const request = require("path")


const app = express();
const port = 4000;
app.get("/",(res,req)=>{
    res.setEncoding("hello this is my first app")
})
app.listen(port,()=>{
  console.log("listeninig server" +port)
})