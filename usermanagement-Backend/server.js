const express=require("express");
const app=express();
const path=require("path");
const session=require('express-session');
const router=require('./router');
const bcrypt = require('bcryptjs');
const cors=require('cors')
// var methodOverride = require('method-override');


require("./db/conn");
// const Register=require("./models/userRegister")

const PORT=process.env.PORT || 9000;

// app.use(methodOverride('_method'));

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors())

// app.set("view engine","ejs");

app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))

// app.use((req,res,next)=>{
//     if(!req.user){
//         res.header('Cache-Control','private, no-cache, no-store, must-revalidate')
//         res.header('Expires','-1')
//         res.header('Pragma','no-cache')
//     }
//     next()
// })

// app.use(session({
//     secret:"Secret key",
//     resave:false,
//     saveUninitialized:true
// }))

app.use('/route',router)


app.get("/", (req, res)=>{
    res.send("My API")
    // res.render("login",{title:"MyServer"})
});

// app.get("/admin", (req, res)=>{
//     res.render("adminlogin",{title:"MyServer"})
// });


app.listen(PORT, ()=>{
    console.log("Server started at http://localhost:9000");
})

