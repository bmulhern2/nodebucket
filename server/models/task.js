/*
Title: nodebucket
Author: Professor Krasso
Date: 9/24/2020
Modified By: Brendan Mulhern
Description: This is nodebucket; a task manager application.
*/

let mongoose = require('mongoose')

let Schema = mongoose.Schema;
// The Task Schema is Created
let task = new Schema({
    text: String
})
// Then the Task Schema is Exported
module.exports = task;