const express = require('express');
const auth = require('../middleware/auth');
const {addEmployee, getEmployee, getOneEmployee, updateEmployee, deleteEmployee} = require('../controllers/employeeController');

const router = express.Router();

router.post('/employee', auth, addEmployee);
router.get('/employee', auth,  getEmployee);
router.get('/employee/:id',auth, getOneEmployee);
router.put('/employee/:id', auth, updateEmployee);
router.delete('/employee/:id', auth, deleteEmployee);


module.exports = {
    routes: router
}