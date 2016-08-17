var express     = require("express"),
    app         = express(),
    bodyparser  = require("body-parser"),
    morgan      = require("morgan"),
    mongoose    = require("mongoose"),
    passport    = require("passport"),
   LocalStrategy = require("passport-local"),
   methodOverride = require("method-override"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment"),
    User        =  require("./models/user"),
    seedDb      = require("./seeds")
    
    var commentRoutes = require("./routes/comments"),
        campgroundRoutes = require("./routes/campgrounds"),
        indexRoutes =require("./routes/index")


mongoose.connect("mongodb://localhost/yelp_camp_v10");
app.use(morgan("dev"));
app.use(bodyparser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
// seedDb(); //seeding the database

 //passport configuration
 
 app.use(require("express-session")({
     secret: "Once again Twinkle is the best!",
     resave: false,
     saveUninitialized: false
 }));
 
 app.use(passport.initialize());
 app.use(passport.session());
 passport.use(new LocalStrategy(User.authenticate()));
 passport.serializeUser(User.serializeUser());
 passport.deserializeUser(User.deserializeUser());
 
 app.use(function(req,res,next){
     res.locals.currentUser = req.user;
     next();
 });
 
 app.use(indexRoutes);
 app.use("/campgrounds", campgroundRoutes);
 app.use("/campgrounds/:id/comments", commentRoutes);


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp has started running!");
})