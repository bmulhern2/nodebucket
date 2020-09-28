let express = require('express')
let employee = require('../models/employee')

let router = express.Router()
// This routes validates the input employeeID and the Datbase EmployeeIDs
router.get('/api/employees/:empId', function(req, res) {
try {
    employee.findOne({ "empId": req.params.empId }, function(err, data) {
        if (err) console.log(err)
        else res.json(data)
    })
} catch (error) {
    console.log(error)
}
})

module.exports = router;