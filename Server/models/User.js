const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

UserSchema.pre('save', function(next) {
  if (this.isNew || this.isModified('password')) {
    const document = this;
    bcrypt.hash(this.password, saltRounds, function(err, hashedPassword) {
      if (err) {
        next(err);
      } else {
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});

UserSchema.methods.isCorrectPassword = function(password, callback) {
  console.log(password);
  console.log(this.password);
  bcrypt.compare(password, this.password, function(err, same) {
    console.log(err);
    if (err) {
      callback(err);
    } else {
      console.log("right",same);
      callback(err, same);
    }
  });
}

module.exports = mongoose.model('User', UserSchema);