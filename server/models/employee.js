/*
Title: nodebucket
Author: Professor Krasso
Date: 9/24/2020
Modified By: Brendan Mulhern
Description: This is nodebucket; a task manager application.
*/

let mongoose = require('mongoose')
let dotenv = require('dotenv')
dotenv.config()

// Imports the task schema
let task = require('./task')

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
    todo: [task],
    done: [task]
})

// Exports the employee model
module.exports = mongoose.model('employee', employeeSchema)