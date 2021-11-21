const express = require('express')
const router = express.Router()
const User = require('../modules/User')
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
const JWT_SECRET = "SumitisGoodboy";
const jwt = require('jsonwebtoken');


// Create a User using: POST "/api/auth/createUser" Doesn't require authentication
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
      return res.status(400).json({ error: "Sorry a User with email already exits" })
    }

    // Making Password  Vauranable
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);


    // Create a new User
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


    res.json({authtoken})

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some Error ccured")
  }


})

module.exports = router
