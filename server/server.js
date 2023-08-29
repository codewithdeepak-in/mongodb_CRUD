import express from 'express';
const app = express();
import mongoose from 'mongoose';

const uri = "mongodb+srv://bagpacker3778:fr1TcBs5oAusCFRt@cluster0.wueyulq.mongodb.net/myApp?retryWrites=true&w=majority";
mongoose.connect(uri);


const port = '3000'
app.listen(port, ()=> {
    console.log(`Server is responding at Port Number ${port}`)
})