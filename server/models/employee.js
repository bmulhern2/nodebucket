let mongoose = require('mongoose')
let dotenv = require('dotenv')
dotenv.config()

// Connects to the MongoDB Database
mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true }, function() {
    console.log('Database Connected')
})

let Schema = mongoose.Schema;

// Defines an Employee Schema
let employeeSchema = new Schema({
    empId: String,
    firstname: String,
    lastname: String,
    todo: Array,
    done: Array
})

module.exports = mongoose.model('employee', employeeSchema)