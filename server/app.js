/**
 * Require statements
 */
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

/**
 * App configurations
 */
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': true}));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../dist/nodebucket')));
app.use('/', express.static(path.join(__dirname, '../dist/nodebucket')));

/**
 * Variables
 */
const port = 3000; // server port

// TODO: This line will need to be replaced with your actual database connection string
const conn = process.env.URI;

/**
 * Database connection
 */
mongoose.connect(conn, {
  promiseLibrary: require('bluebird'),
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => {
  console.debug(`Connection to the database instance was successful`);
}).catch(err => {
  console.log(`MongoDB Error: ${err.message}`)
}); // end mongoose connection

let Schema = mongoose.Schema;

let TaskSchema = new Schema({
  title: String,
  task: String,
})

let Task = mongoose.model('Task', TaskSchema)


/**
 * API(s)
 */

app.get('/api', function(req, res) {
  Task.find({}, function(err, data) {
    if (!err) res.json(data)
    else console.log(err)
  })
})

app.post('/post', function(req, res) {
  Task.create(req.body)
})

app.put('/update/:id', function(req, res) {
  Task.findByIdAndUpdate(req.params.id, req.body);
})

app.delete('/delete/:id', function(req, res) {
  Task.findByIdAndDelete(req.params.id);
})

/**
 * Create and start server
 */
http.createServer(app).listen(port, function() {
  console.log(`Application started and listening on port: ${port}`)
}); // end http create server function
