const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { User } = require('./module/users');

const app = express();
app.use(bodyParser.json());


const uri = "mongodb+srv://bagpacker3778:fr1TcBs5oAusCFRt@cluster0.wueyulq.mongodb.net/myApp?retryWrites=true&w=majority";
mongoose.connect(uri);

app.post('/api/users', async(req, res) => {
    try{
        const user = new User({
            email: req.body.email,
            password: req.body.password
        })

        const status = await user.save();
        console.log(status);
        res.sendStatus(200);

    }catch(err){
        if(err) console.log(err);
        res.sendStatus(500)
    }
})

const port = '3000'
app.listen(port, ()=> {
    console.log(`Server is responding at Port Number ${port}`)
    console.log(User);
})