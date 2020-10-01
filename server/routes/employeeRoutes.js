/*
Title: nodebucket
Author: Professor Krasso
Date: 9/24/2020
Modified By: Brendan Mulhern
Description: This is nodebucket; a task manager application.
*/

let express = require('express')
let employee = require('../models/employee')

let router = express.Router()
// This routes validates the input employeeID and the Datbase EmployeeIDs
router.get('/employee/:empId', function(req, res) {
try {
    employee.findOne({ "empId": req.params.empId }, function(err, data) {
        if (err) console.log(err)
        else res.json(data)
    })
} catch (error) {
    console.log(error)
}
})

// Employee Read Task Route

router.get('/:empId/tasks', function(req, res) {
try {
    employee.findOne({ "empId": req.params.empId }, function(err, employee) {
        if (err) {
            console.log(err)
            res.status(500).send({
                'message': 'internal server error'
            })
        } else {
            console.log(employee)
            res.json(employee)
        }
    })
} catch (e) {
    console.log(e)
    res.status(500).send({
        'message': 'internal server error'
    })
}
})
// New Task Route
router.post('/:empID/tasks/', async(req, res) => {
    try {
        employee.findOne({ "empId": req.params.empId }, function(err, employee) {
            if (err) {
                console.log(err)
                res.status(500).send({
                    "message": "internal server error"
                })
            } else {
                console.log(employee)

                const task = {
                    text: req.body.text
                }

                employee.todo.push(task)

                employee.save(function(err, updatedEmployee) {
                    if (err) {
                        console.log(err)
                        res.status(500).send({
                            "message": "internal server error"
                        })
                    } else {
                        console.log(updatedEmployee)

                        res.json(updatedEmployee)
                    }
                })
            }
        })
    } catch (e) {
        console.log(e)

        res.status(500).send({
            "message": "internal server error"
        })
    }
})
// Update Task Route
router.put('/:empId/tasks', async(req, res) => {
   try {
    employee.findOne({ "empId": res.params.empId }, function(err, employee) {
        if (err) {
            console.log(err)
            res.status(500).send({
                "message": "internal server error"
            })
        } else {
            console.log(employee)
            employee.set({
                todo: req.body.todo,
                done: req.body.done
            })
            employee.save(function(err, updatedEmployee) {
                if (err) {
                    console.log(err)
                    res.status(500).send({
                        "message": "internal server error"
                    })
                } else {
                    console.log(updatedEmployee)
                    res.json(updatedEmployee)
                }
            })
        }
    })
} catch (e) {
    console.log(e)
    res.status(500).send({
        'message': 'internal server error'
    })
    }
})
// Delete Task Route
router.delete('/:empId/tasks/:tasksId', async(req, res) => {
    try {
        employee.findOne({ 'empId': req.params.empId }, function(err, employee) {
            if (err) {
                console.log(err)
                res.status(500).send({
                    'message': 'internal server error'
                })
            } else {
                console.log(employee)
                const todoItem = employee.todo.find(item => item._id.tostring() === req.params.taskId)
                const doneItem = employee.done.find(item => item._id.toString() === req.params.taskId) 
                if (todoItem) {
                    employee.todo.id(todoItem._id).remove()
                    employee.save(function(err, updatedtodoItemEmployee) {
                        if (err) {
                            console.log(err)
                            res.status(500).send({
                                'message': 'internal server error'
                            })
                        } else {
                            console.log(updatedtodoItemEmployee)
                            res.json(updatedtodoItemEmployee)
                        }
                    })
                } else if (doneItem) {
                    employee.done.id(doneItem._id).remove()
                    employee.save(function(err, updatedDoneItemEmployee) {
                        if (err) {
                            console.log(err)
                            res.status(500).send({
                                'message': 'internal server error'
                            })
                        } else {
                            console.log(updatedDoneItemEmployee)
                            res.send("Delete successful")
                        }
                    })
                } else {
                    console.log("Invalid Task Id")
                    res.status(200).send("Unable to located the requested task")
                }
            }
        })
    } catch (e) {
        console.log(e)
        res.status(500).send({
            'message': 'internal server error'
        })
    }
})

module.exports = router;
