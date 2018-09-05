const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const user = require('./user.route');
const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds141950.mlab.com:41950/advredux`);

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/checking', function(req, res){
   res.json({
      "Tutorial": "Welcome to the Node express JWT Tutorial"
   });
});

app.use('/user', user);

app.listen(PORT, function(){
   console.log('Server is running on Port',PORT);
});
