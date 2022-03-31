const { request, response } = require("express");
var express = require("express");
var router = express.Router();
const Register = require("./models/userRegister");
const Admin = require("./models/adminRegister")
const bcrypt = require('bcryptjs');


//User Registration

router.post('/register', async (req, res) => {
    try {
        const {name,phone,email,password}=req.body
        const user = await Register.findOne({ email: email })
        if(user){
            res.send({message:"User Exist"})
        }else{
            const hashedPw = await bcrypt.hash(password, 12);
                const registerUser = new Register({
                    name: req.body.name,
                    phone: req.body.phone,
                    email: req.body.email,
                    password: hashedPw
                })
                const user = await registerUser.save()
                res.send({message:"User Registered Successfully",user:user})
        }
    }catch (error) {
        res.send(error)
    }
})


//User Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await Register.findOne({ email: email })
        const isMatch = await bcrypt.compare(password, user.password);

        if (user){
            if(isMatch){
            req.session.user = req.body.email;
            req.session.username = user.name;
            res.send({message:"Login Successfull",user:user})
            }else{
                res.send({message:"Invalid login details"})
            }
        }
        else {
            res.send({ message: "User not registered" });
        }
    } catch (error) {
        res.send({message:"Invalid Credentials"})
    }

})

// router.get('/dashboard', (req, res) => {
//     if (req.session.user) {
//         res.render('dashboard', { user: req.session.user, name: req.session.username });

//     } else {
//         res.status(401).send('Unauthorize User');
//     }
// })

// //User Logout
// router.get('/logout', (req, res) => {
//     req.session.destroy((err) => {
//         if (err) {
//             console.log(err);
//             res.send('Error');
//         } else {
//             res.render('login', { logout: "Logout Successful" });
//         }
//     })
// })


// //Admin route
router.post('/admin', async (req, res) => {
    try {
        const { email, password } = req.body;
       
        if (email != '' || password != '') {
            const admin = await Admin.findOne({ email: email })
            if (admin && (password == admin.password)) {
                req.session.admin = req.body.email;
                res.send({message:"Login Successfull",admin:admin})
            }
            else {
                res.send({message: "Inavalid Admin details" });
            }
        } else {
            res.send({message:"Please Enter Email and Password"});
        }

    } catch (err) {
        res.send("Bad Request");
    }
})

router.get('/adminDashboard', async (req, res) => {
   
        const user = await Register.find({})
    if (user) {
        res.send({ message:"Request successfull", user: user });
    } else {
        res.send('Unauthorize User');
    }
})

// router.get('/logouts', (req, res) => {
//     req.session.destroy((err) => {
//         if (err) {
//             console.log(err);
//             res.send('Error');
//         } else {
//             res.render('adminlogin', { logout: "Logout successfull" });
//         }
//     })
// })

// //User Search
// router.post('/', (req, res) => {
//     try {
//         var regex = new RegExp(req.body.search, 'i')

//         Register.find({ name: regex }).then((result) => {
//             res.render('adminDashboard', { user: result })
//         }).catch((err) => {
//             res.render('adminDashboard', { out: "User not found" })
//         })
//     } catch (error) {
//         res.status(400).send("User not found");
//     }
// })

//User Update Request
router.get('/:id', async (req, res) => {
    const data = await Register.find({ _id: req.params.id })

    if (data) {
        res.send({message:"Successful", data: data })
    } else {
        res.send({message:"Error"})
    }
})

//User Updation
// router.put('/:id', async (req, res) => {
//     try {
//         const data = await Register.findByIdAndUpdate({ _id: req.params.id }, req.body)
//         if (data) {
//             res.send({message:"Request successfull",data})
//         } else {
//             res.send({message:"Request failed"})
//         }
//     } catch (error) {
//         // res.status(400).send("User details not found");
//         res.send({message:"Bad request"})
//     }

// })

// //Add new user
router.post('/add', async (req, res) => {
    try {
        const {name,phone,email,password}=req.body
        //console.log(req.body)
        const user = await Register.findOne({ email: email })
        if(user){
            res.send({ message: "User Already Exists" });
        } else {
            const hashedPw = await bcrypt.hash(password, 12);

            const data = await Register.insertMany({
                name:name,
                phone:phone,
                email:email,
                password: hashedPw
            })
            res.send({message:"New User Created Successfully",data:data});
        }
    } catch (error) {
            res.send({ message:"Bad Request"});
    }
})


//uer Delete
router.delete('/:id', (req, res) => {
    Register.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.send({message:"Some error in deleting the data"})
        } else {
            res.send({message:"User Deleted Successfully"})
        }
    })
})

module.exports = router
