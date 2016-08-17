var express = require("express"),
bodyParser  = require("body-parser"),
methodOverride = require("method-override"),
expressSanitizer = require("express-sanitizer"),
mongoose    = require("mongoose"),
app        = express();

//app config
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));


//mongo config
var blogSchema = {
    title: "string",
    image: "string",
    body: "string",
    created: 
        {type: Date, default: Date.now }
    
};

var Blog = mongoose.model("Blog", blogSchema);

//Restful Routing

app.get("/", function(req, res){
    res.redirect("/blogs"); 
});

//index route

app.get("/blogs", function(req, res){
    Blog.find({},function(err, blogs){
        if(err){
            console.log("ERROR!!!");
        }else{
            res.render("index", {blogs:blogs});
        }
    });
});

//new route
app.get("/blogs/new", function(req, res) {
    res.render("new");
});

//create ROUTE

app.post("/blogs", function(req,res){
    //create blog

    req.body.blog.body = req.sanitize(req.body.blog.body);
    
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render("new");
        } else {
            res.redirect("/blogs");
        }
    });
});

//show ROUTE

app.get("/blogs/:id", function(req,res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        }else{
            res.render("show", {blog:foundBlog});
        }
    });
});

//Edit route
app.get("/blogs/:id/edit", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        } else{
            res.render("edit", {blog: foundBlog});
        }
    });
});

//UPDATE ROUTE
app.put("/blogs/:id", function(req,res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if(err){
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

app.delete("/blogs/:id", function(req,res){
   //two step process
   //destroy blog then redirect
   Blog.findByIdAndRemove(req.params.id, function(err){
        if(err) { res.redirect("/blogs");
       } else {
           res.redirect("/blogs");
       } 
    });
});

app.listen(process.env.PORT, process.env.IP, function(){console.log("Server is running")});


