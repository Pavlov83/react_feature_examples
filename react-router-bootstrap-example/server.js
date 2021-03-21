const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const Post = require('./models/PostModel');
const { findById } = require('./models/PostModel');
const path = require("path")


app.use(cors())
app.use(express.json()) 
app.use(express.static(path.join(__dirname, "client", "build")))

const db_conn = 'mongodb+srv://pav:Pavkata83@cluster0.lbqpp.mongodb.net/crudmern?retryWrites=true&w=majority';
mongoose.connect(db_conn,{useUnifiedTopology:true,useNewUrlParser:true})
        .then(() => console.log('connected to mongo'))


    app.post('/insert',async(req,res)=>{

        const foodName = req.body.foodName;
        const days = req.body.days;
        
        const postItem = new Post({foodName: foodName,days:days})
        try{
            await postItem.save()
            console.log('save successful')
        }catch(err){
            console.log(err)
        }

    }) 


    app.get('/read',async(req,res)=>{
            
            await Post.find({},(err,result) =>{
                if(err){
                    res.send(err)
                }
               res.send(result)
           })      

    })

    app.put('/update',async(req,res) =>{
        const newFoodName = req.body.newFoodName;
        const id = req.body.id;

         try{

          await Post.findById(id, (err, updatedFood) =>{
                updatedFood.foodName = newFoodName
                updatedFood.save();
                res.send('update');
                console.log('success')
            })

         }catch(err){
             console.log(err)
         }


    })

    app.delete('/delete/:id',async(req,res) =>{
        const id = req.params.id;

         await Post.findByIdAndRemove(id).exec();
        res.send('deleted')

    })
    
    //app.use(express.static(path.join(__dirname,'build')));
    //app.get('/*',(req,res) =>{
    //res.sendFile(path.join(__dirname,'build','index.html'));
//});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=> console.log(`app runs on ${PORT}`));
 