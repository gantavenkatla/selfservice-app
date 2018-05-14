const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

const SALT_ROUNDS = 7;


const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {type: String, required: true, lowercase: true, unique: true},
    phoneNumber: { type: String, required: true },
    username: {type: String, required: true, lowercase: true, unique: true},
    password: { type: String, required: true }
  }, {
    timestamps: true
  }
);

userSchema.set('toJSON', {
  transform: function (doc, user) {
    delete user.password;
    return user;
  }
});

userSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  bcrypt.hash(user.password, SALT_ROUNDS, (err, hash) => {
    if (err) return next(err);
  user.password = hash;
  next();
});
});

userSchema.methods.comparePassword = function (tryPassword, callback) {
  bcrypt.compare(tryPassword, this.password, (err, isMatch) => {
    if (err) return callback(err);
  callback(null, isMatch);
});
};

module.exports = mongoose.model('User', userSchema);
