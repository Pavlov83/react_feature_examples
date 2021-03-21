const mongoose = require('mongoose');



const FoodModel = new mongoose.Schema({

    foodName:{
        type:String,
        required:true

    },days:{
        type:String,
        required:true

    }
})

const Post = mongoose.model('FoodDocument',FoodModel);

module.exports = Post;
