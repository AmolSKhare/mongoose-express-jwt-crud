const mongoose = require('mongoose');
const Joi = require('joi');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true
    },
    age: {
        type: Number,
        minlength: 1,
        maxlength: 150,
        required: true
    },
    email: {
        type: String,
        minlength: 5,
        maxlength: 100,
        required: true
    },
    mobile: {
        type: Number,
        minlength: 1,
        maxlength: 10,
        required: true
    }, 
    address: {
        type: String,
        minlength: 5,
        maxlength: 100,
        required: true
    }
});

const Employee = mongoose.model('Employee', employeeSchema);

const validateEmployee = (employee) => {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        age: Joi.number().min(1).max(150).required(),
        email: Joi.string().min(5).max(100).required(),
        mobile: Joi.number().min(1).max(10000000000).required(),
        address: Joi.string().min(5).max(100).required()
    }

    return Joi.validate(employee, schema);
}

exports.Employee = Employee;
exports.validate = validateEmployee;