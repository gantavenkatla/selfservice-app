const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = mongoose.connection;

console.log('connecting to MongoDB');
console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);

db.once('open', () => {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});


mongoose
  .connect(process.env.DATABASE_URL)
  .catch(err => console.log('Error Connecting to Mongo: \n\n', err));


module.exports = db;
