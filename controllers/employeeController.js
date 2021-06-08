const { model } = require('mongoose');
const {Employee, validate} = require('../models/employee');


const addEmployee = async (req, res, next) => {
        const {error} =  validate(req.body);
        if(error) return res.status(422).send(error.details[0].message);

        let employee = new Employee({
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
            mobile: req.body.mobile,
            address: req.body.address
        });

        employee =  await employee.save(); 
        res.send(employee);
}

const getEmployee = async (req, res, next) => {
    const employee = await Employee.find().sort('name').exec();
    res.send(employee);
}

const getOneEmployee = async (req, res, next) => {
    const employee = await Employee.findById(req.params.id);
    if(!employee) return res.status(401).send('The EMployee with the given id not found');
    res.send(employee);
}

const updateEmployee = async (req, res, next) => {
    const {error} = validate(req.body);
    if(error) return res.status(422).send(error.details[0].message);

    let employee = await Employee.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        mobile: req.body.mobile,
        address: req.body.address
    }, {new: true});

    if(!employee) return res.status(401).send('The Employee with the given id not found');
    res.send(employee);
}

const deleteEmployee = async (req, res, next) => {
    const employee = await Employee.findByIdAndRemove(req.params.id);
    if(!employee) return res.status(401).send('The Employee with the given id not found');

    res.send(employee);
}
module.exports = {
    addEmployee,
    getEmployee,
    getOneEmployee,
    updateEmployee,
    deleteEmployee
}