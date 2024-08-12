const express = require ("express");
const hbs = require ("hbs");
const path = require("path")


const app = express();

const port = process.env.PORT ||4000;

app.get("/", (req,res)=>{
    res.send("hello this is my first app");
});
app.listen(port,()=>{
  console.log("listeninig server" +port)
})