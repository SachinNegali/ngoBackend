
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from "body-parser";
import cors from "cors";
const app = express();


import ngoRouter from './routes/ngo.js'

app.listen(8000, function() {
  console.log('listening on 8000')
})

app.get('/', function (req, res) {
  res.send('Running LetseEndorse NGOs')
})

const url= "mongodb://localhost/test";

mongoose.connect(url,{useNewUrlParser: true}, {useUnifiedTopology: true});
const con= mongoose.connection;
app.use(express.json());
try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
}

app.use('/ngo',ngoRouter);