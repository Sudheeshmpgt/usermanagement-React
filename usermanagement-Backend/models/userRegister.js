const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:"This field is required",
        trim:true,
        minlength:[6,"Please enter atleast 6 characters"]
    },
    phone:{
        type:String,
        required:"This field is required",
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:"This field is required",
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minlength:[4,"Please enter atleast 4 characters"],
        trim:true
    }
})


const Register = new mongoose.model("Register",userSchema);

module.exports=Register;