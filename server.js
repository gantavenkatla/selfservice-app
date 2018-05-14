const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser')
const api = require('./server/routes/apirouter');
require('dotenv').config();
require('./server/config/database');

var favicon = require('serve-favicon');
var logger = require('morgan');

//const api = require('./server/routes/api');
const app = express();
app.use(express.static(path.join(__dirname,'dist')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))
// API location
app.use('/api', api);
app.get('/*',(req,res) => {
  res.sendFile(path.join(__dirname,'dist/index.html'));
});
const port = process.env.PORT || '3002';
app.set('port',port);
const server = http.createServer(app);
server.listen(port,() => console.log('Running'));
