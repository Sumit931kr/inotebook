const express = require('express')
const router = express.Router()
const User = require('../modules/User')
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
const JWT_SECRET = "SumitisGoodboy";
const jwt = require('jsonwebtoken');
const fetchUser = require('../Middleware/fetchUser');


// ROUIE 1:- Create a User using: POST "/api/auth/createUser" Doesn't require authentication
router.post('/createUser', [
  body('name', 'Enter a Valid Name').isLength({ min: 3 }),
  body('email', 'Enter a Valid Email ').isEmail(),
  body('password', 'Password Must be atleast % character').isLength({ min: 5 }),
], async (req, res) => {

  // If there are errros, return Bad request and the error

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }


  // Check Wheater the user with this email exists already
  try {

    let user = await User.findOne({ email: req.body.email })
    console.log(user);
    if (user) {
      return res.status(400).json({ error: " 32 Sorry a User with email already exits" })
    }

    // Making Password  Vauranable
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);


    // Create a new user
    user = await User.create({
      name: req.body.name,
      password: secPass,
      email: req.body.email,
    })
    const data = {
      user: {
        id: user.id,
      }
    }


    const authtoken = jwt.sign(data, JWT_SECRET);
    res.json({ authtoken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send(" 58 Internal Server ERROR")
  }

})


// ROUTE 2 :-2 Aunthenticate a User using: POST "/api/auth/loginUser" No login required

router.post('/loginUser', [

  body('email', 'Enter a Valid Email ').isEmail(),
  body('password', 'Cannot be Blank ').exists(),

], async (req, res) => {
let success = false;

// If there are error return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: " 81 Please 1 try with Correct Credentials" })
    }

    const passwordCompare = await bcrypt.compare(password, user.password)
    if (!passwordCompare) {
      success = false;
      return res.status(400).json({ success, error: " 86 Please try with Correct Credentials" })
    }

    const data = {
      user: {
        id: user.id,
      }
    }

    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true
    res.json({ success, authtoken })



  } catch (error) {

    console.error(error.message);
    res.status(505).send(" 102 Internal Server ERROR");

  }

})

// ROUTES 3 :- Get loggedIn User Detials using : POST "/api/auth/getUser" . Login Required 

router.post('/getUser', fetchUser, async (req, res) => {

  try {

    userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user);
  }
  catch (error) {
    console.error(error.message);
    res.status(500).send(" 119 Internal Server ERROR");
  }


})



module.exports = router
