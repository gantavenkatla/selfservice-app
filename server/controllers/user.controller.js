const User = require('../models/User');
const RegistrationToken = require('../models/RegistrationToken');
const jwt = require('jsonwebtoken');
const randomstring = require('randomstring');

const JWT_SECRET = process.env.JWT_SECRET;


function signup(req, res) {
  RegistrationToken.findOne({value: req.body.registrationToken})
    .then(token => {
    if (!token) throw new Error('invalid registration token');
  console.log("creating JWT Token",token);

  const newUser = new User(req.body);
  return newUser.save();
})
.then(user => {
  console.log("creating JWT Token",process.env.JWT_SECRET);
    res.json({token: createJWT(user)});
})
.catch(err => {
    console.log('err =', err.message);
  res.status(400).json(err.message)
});
}

function login(req, res) {
  console.log("Login Test");
  User.findOne({email: req.body.email})
    .exec()
    .then(user => {
    if (!user) res.status(401).json('bad credentials');
  user.comparePassword(req.body.password, (err, isMatch) => {
    if (isMatch) {
      res.json({token: createJWT(user)});
    } else {
      res.status(401).json('bad credentials');
}
});
})
.catch(err => {
    console.log('err =', err.message);
  res.status(401).json('bad credentials');
});
}

function createRegistrationToken(req, res) {
  const tokenValue = randomstring.generate(10);
  RegistrationToken.remove({})
    .then(err => {
    console.log('err =', err);
  return new RegistrationToken({value: tokenValue}).save();
})
.then(token => {
    res.json(tokenValue);
})
.catch(err => {
    console.log('err =', err);
  res.status(500).json(err.message);
})
}

function getRegistrationToken(req, res) {
  console.log('req.params =', req.params);
  RegistrationToken.findOne({value: req.params.id})
    .then(token => {
    if (!token) return res.status(404).json('not found');
  console.log('token =', token);
  res.json(token.value);
})
.catch(err => {
    res.status(500).json(err.message);
});
}

function createJWT(user) {
  console.log(user);
  return jwt.sign(
    {
      _id: user._id,
      name: user.username,
      email: user.email
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '7d'
    }
  );
}


module.exports = {
  signup: signup,
  login: login,
  createRegistrationToken: createRegistrationToken,
  getRegistrationToken: getRegistrationToken,
}
