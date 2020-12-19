const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser').json();
const jwt = require('jsonwebtoken');
const expressjwt = require('express-jwt');
const bcrypt = require('bcrypt');
app.use(cors({origin: '*'}));
app.options('*', cors({origin: '*'}));
mongoose.connect('mongodb://localhost:27017/TIL', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const jwtCheck = expressjwt({
  secret: 'secretkey',
  algorithms: ['HS256'],
});
const postSchema = new mongoose.Schema({
  title: String,
  author: String,
});
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    // required: [true, "What's your email"],
  },
  password: {
    type: String,
    required: true,
    minlength: [6, 'Password needs at lease 6 characters'],
  },
  profile: {
    type: String,
    max: 500,
  },
});
userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
const User = mongoose.model('user', userSchema);
//now we create a new user from the User Model/schema above
app.get('/', (req, res) => {
  Find(res);
});
// user.save();
app.post('/signup', bodyParser, (req, res) => {
  console.log('!', req.body);
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const profile = req.body.profile;
  user = new User({
    name,
    email,
    password,
    profile,
  });
  user.save();
  //   res.redirect('/welcome');
  const maxAge = 3 * 24 * 60 * 60;
  let token = jwt.sign(
    {
      sub: user.id,
      username: user.username,
    },
    'secretkey',
    {expiresIn: maxAge}
  );
  res.json({access_token: token});
});

function InsertMany() {
  User.insertMany([user1, user2], err => {
    if (err) console.log(err);
    else {
      console.log('successfully saved all');
    }
  });
}
// use find() method - takes 2 param
function Find(res) {
  User.find((err, users) => {
    if (err) console.log(err);
    else {
      res.json(users);
      // mongoose.connection.close();
      users.forEach(user => console.log(user.name));
    }
  });
}
//updating data using updateOne()
//takes 3 params - how to find the document you want to update, what update/changes it needs , error handling function
function Update() {
  User.updateOne(
    {_id: '5fd6193a98b98a0dc884804b'},
    {name: 'king kong'},
    err => {
      if (err) console.log(err);
      else console.log('successfully updated');
    }
  );
}
// User.deleteOne({_id: '5fd61520c7f1f30d8a674f32', err => {   if (err) console.log(err);
//     else console.log('successfully updated');
//   }});
function deleteMany() {
  User.deleteMany({name: 'mary Hope'}, err => {
    if (err) console.log(err);
    else console.log('successfully deleted');
  });
}
//embedding schemas into another schema so that you can form relationships
app.listen(3001);
