var http = require('http');
const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/mydatabase';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true, // Optional, adds support for unique indexes
});

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//create a server object:
http.createServer(function (req, res) {
  res.write('** Welcome to GlobalLogic!!!! **'); //write a response to the client
  res.end(); //end the response
}).listen(80); //the server object listens on port 80
