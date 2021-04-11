const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const multiparty = require('connect-multiparty')
const app = express();
const cors = require('cors');
const path = require('path');
const fs = requie('fs');

const MultiPartyMiddleware = multiparty({uploadDir:'./images'});
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.status(200).json({
        message: "testing our server"
    })
})


app.post('/upload', MultiPartyMiddleware, (req,res)=>{
    var TempFile = req.files.upload;
    var TempPathfile = TempFile.path;

    const targetPathUrl = path.join(__dirname,"./uploads/" + TempFile.name);

    if(path.extname(TempFile.originalFilename).toLowerCase() === ".png" || ".jpg"){
        fs.rename(TempPathfile, targetPathUrl, err =>{
            if(err) return console.log(err)
        })
    }
    console.log(req.files);
})


const PORT = process.env.PORT || 8000;
app.listen(PORT,()=> console.log(`app runs in ${PORT}`))