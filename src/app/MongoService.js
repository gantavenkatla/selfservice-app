const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/selfservice';

class MongoService{

  constructor(req, res){
    this.req = req
    this.res = res
  }

  insert(registrationRecord, db, callback){
    db.collection('grocery').insertOne({
      "item" : registrationRecord
    }, function(){
      callback()
    })
  }

  addRegistration(){
    let self = this;
    let groceryItem = this.req.body.groceryItem;
    try{
      MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        self.insert(groceryItem, db, function(){
          db.close()
          return self.res.status(200).json({
            status: 'success'
          })
        })
      });
    }
    catch(error){
      return self.res.status(500).json({
        status: 'error',
        error: error
      })
    }
  }
}
module.exports = MongoService
