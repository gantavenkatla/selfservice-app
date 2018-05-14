const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registrationTokenSchema = new Schema(
  {
    value: {type: String, required: true, unique: true},
  }, {
    timestamps: true
  }
);

module.exports = mongoose.model('RegistrationToken', registrationTokenSchema);
