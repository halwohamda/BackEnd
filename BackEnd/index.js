import express from "express";
const app = express();
const port = 8000;
import cors from 'cors';
app.use(cors())
app.use(express.json())



app.listen(port, ()=>{
    console.log(`listening on ${port}`);
})