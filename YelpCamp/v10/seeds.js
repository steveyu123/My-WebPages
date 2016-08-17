var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name:"Foresty West",
        image:"http://104.236.29.168/wp-content/uploads/2013/01/transsiberian-scenery.jpg",
        description:"Lorem ipsum dolor sit amet, simul consul perfecto ad vis. Has vocent audire ex. Nec stet ponderum ex, elitr prodesset cum et, aeque zril vocibus qui ne. Dicunt noluisse at ius, no vim meis homero petentium. In vel clita viderer, eos ex munere iuvaret. Ea mediocrem adolescens reformidans nec, qui brute oportere in, viderer nostrud erroribus an mea. Eam ex utamur scribentur."
    },   
    {
        name:"Snowdome falls",
        image:"http://www.tedwoodphoto.com/wp-content/uploads/galleries/post-333/Belukha-20100803-2493.jpg",
        description:"Lorem ipsum dolor sit amet, simul consul perfecto ad vis. Has vocent audire ex. Nec stet ponderum ex, elitr prodesset cum et, aeque zril vocibus qui ne. Dicunt noluisse at ius, no vim meis homero petentium. In vel clita viderer, eos ex munere iuvaret. Ea mediocrem adolescens reformidans nec, qui brute oportere in, viderer nostrud erroribus an mea. Eam ex utamur scribentur."
    },   
    {
        name:"Andals Mountain",
        image:"http://www.v3wall.com/wallpaper/1600_1200/0911/1600_1200_20091110094749622175.jpg",
        description:"Lorem ipsum dolor sit amet, simul consul perfecto ad vis. Has vocent audire ex. Nec stet ponderum ex, elitr prodesset cum et, aeque zril vocibus qui ne. Dicunt noluisse at ius, no vim meis homero petentium. In vel clita viderer, eos ex munere iuvaret. Ea mediocrem adolescens reformidans nec, qui brute oportere in, viderer nostrud erroribus an mea. Eam ex utamur scribentur."
    }
    
    ]

//remove campgrounds
function seedDb(){
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed Campground");
//add a few campgrounds!
        data.forEach(function(seed){
             Campground.create(seed, function(err, campground){
                 if(err){
                     console.log(err);
                 }else{
                     console.log("A campground has been added");
                     //create comments
                     Comment.create(
                         {
                             text: "This place is great, but no wifi",
                             author: "Homer"
                         }, function(err, comment){
                             if(err){
                                 console.log(err);
                             }else{
                                 campground.comments.push(comment);
                                 campground.save();
                                 console.log("Created new comment!");
                             }
                         });
                 }
             });
        });
    });
}

module.exports = seedDb;