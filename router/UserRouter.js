const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require('../model/User');
const jwt = require("jsonwebtoken");

/*
localhost:8000/user/register
localhost:8000/user/login
localhost:8000/user/all
*/

/*
Name API : localhost:8000/user/register
fields: Name, E-mail, Password
Method: Post
*/

router.post("/register", async (req, res) => {
    try {
        let { name, email, password } = req.body;
        // user existing or not
        let user = await User.findOne({ email: email });
        if (user) {
            return res.status(401).json({ error: "User Already Existed" });
        }
        //bcryptjs - encode the password
        let salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
        //bcrypt.compareSync(password);
        //console.log(password);
        user = new User({ name, email, password });
        user = await user.save();
        res.status(200).json({result: "success", user: user});
    } catch (err) {
        if (err) throw err;
        res.status(500).json({ error: "Server Error" });
    }
}); 

/*
Name API : localhost:8000/user/login
fields: E-mail, Password
Method: Post
*/
router.post("/login", async(req, res) => {
    //res.send("Login Successfully...!!");
    //Get the data from
    let { email, password } = req.body;
    //console.log(email); 
    //verify the user existed or not
    let user = await User.findOne({ email: email });

    
    //if (user) {
        //res.status(401).json({ error: "User is Already Existed" });
    //} else {
        //res.status(401).json({ error: "User Information is not Existed" });
    //}
    
    console.log(password);
    console.log(user.password);
    //verify the password
    let result = await bcrypt.compare(password, user.password);
    //console.log(result);
    if (!result) {
        return res.status(401).json({
            status: "Please Enter the Proper Password",
        });
    }
    let payload = {
        user: {
            email: user.email,
            password: password,
        },
    };
    jwt.sign(payload, process.env.N_KEY, (err, token) => {
        if (err) throw err;
        res.status(200).json({
            status: "Login Successfully",
            token: token,
        });
    });
});

/*
Name API : localhost:8000/user/all
Method: GET
*/
router.get("/all", () => {});

module.exports = router;
