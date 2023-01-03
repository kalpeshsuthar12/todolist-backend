const express = require('express');
const app = express(); 
const db = require('./config/mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
port = 5000;
app.use(cors()); 
app.use(express.urlencoded())
app.use('/', require('./routes/web'));

// run your application, so it listens on port 5000
app.listen(port,function(err){
    if(err){console.log(`error in running the ${port}`); return;}
    console.log(`Server is running on port ${port}`)
})