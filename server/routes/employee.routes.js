const express =require('express');
const router = express.Router();

const employee = require('../controllers/employee.controller');

router.get('/', employee.getEmployees);
router.post('/', employee.createEmployees);// tiene una s de mas 
router.get('/:id', employee.getEmployee);
router.put ('/:id',employee.editEmployee);
router.delete('/:id',employee.deleteEmployee);
module.exports = router;