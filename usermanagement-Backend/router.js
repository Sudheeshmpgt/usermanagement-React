const { request, response } = require("express");
var express = require("express");
var router = express.Router();
const Register = require("./models/userRegister");
// const Admin = require("./models/adminRegister")
const bcrypt = require('bcryptjs');


//User Registration

// router.get('/register', (req, res) => {
//     res.render('registration')

// })

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
        }
    }catch (error) {
        res.send(error)
    }
})
// res.status(201).render('login', { newuser: "New Account Created Successfully" });
// res.render('registration', { user: "Password does not match" })
// res.render('registration', { err: "Email already exists" })


//User Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await Register.findOne({ email: email })
        const isMatch = await bcrypt.compare(password, user.password);

        if (user){
            if(isMatch){
            // req.session.user = req.body.email;
            // req.session.username = user.name;
            // res.status(200).redirect('/route/dashboard');
            res.send({message:"Login Successfull",user:user})
            }else{
                res.send({message:"Invalid login details"})
            }
        }
        else {
            res.render('login', { user: "Inavid login details" });
        }
    } catch (error) {
        //  res.status(400).render('login', { user: "Please Enter Email and Password" });
        res.send({message:"User not registered"})
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
// router.post('/admin', async (req, res) => {
//     try {

//         const { email, password } = req.body;
//         if (email != '' || password != '') {
//             const admin = await Admin.findOne({ email: email })

//             if (admin && password == admin.password) {
//                 req.session.admin = req.body.email;
//                 res.status(200).redirect('/route/adminDashboard');
//             }
//             else {
//                 res.render('adminlogin', { user: "Inavalid Admin details" });
//             }
//         } else {
//             res.render('adminlogin', { user: "Please Enter Email and Password" });
//         }

//     } catch (err) {
//         res.status(400).send("Bad Request");
//     }
// })

// router.get('/adminDashboard', async (req, res) => {
//     if (req.session.admin) {
//         const data = await Register.find({})

//         var size = data.length;

//         res.render('adminDashboard', { user: data });
//     } else {
//         res.send('Unauthorize User');
//     }
// })

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

// //User Update Request
// router.get('/update/:id', async (req, res) => {
//     const data = await Register.find({ _id: req.params.id })

//     if (data) {
//         res.render('update', { user: data })
//     } else {
//         res.send("Error")
//     }
// })

// //User Updation
// router.put('/:id', async (req, res) => {
//     try {
//         const data = await Register.findByIdAndUpdate({ _id: req.params.id }, req.body)
//         console.log(req.body)
//         if (data) {
//             res.redirect('/route/adminDashboard')
//         } else {
//             res.send("Error")
//         }
//     } catch (error) {
//         res.status(400).send("User details not found");
//     }

// })

// //Add new user
// router.get('/adduser', (req, res) => {
//     res.render('adduser')
// })

// router.post('/addnew', async (req, res) => {
//     try {
//         const email = req.body.email;
//         const data = await Register.find({ email: email });
//         if (email == data) {
//             res.render('adduser', { err: "User Already Exists" });
//         } else {
//             const password = req.body.password;
//             const hashedPw = await bcrypt.hash(password, 12);

//             await Register.insertMany({
//                 name: req.body.name,
//                 phone: req.body.phone,
//                 email: req.body.email,
//                 password: hashedPw
//             })
//             res.redirect('/route/adminDashboard');
//         }

//     } catch (error) {
//             res.render('adduser', { err: "User Already Exists"});
//     }
// })


// //uer Delete
// router.delete('/:id', (req, res) => {
//     Register.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
//         if (err) {
//             res.send("Some error in deleting the data")
//         } else {
//             res.redirect('/route/adminDashboard')
//         }
//     })
// })

module.exports = router;
