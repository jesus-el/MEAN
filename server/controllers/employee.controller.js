const Employee=require('../models/employee');

const employeeCtrl = {};

employeeCtrl.getEmployees = async(req, res) =>{
 const employees = await Employee.find();
  res.json(employees);

      
};


employeeCtrl.createEmployees = async(req, res) =>{
   const employee = new Employee(req.body);
   console.log(employee);
    await employee.save();
    // console.log(req.body);
    res.json({
         'status':'Employee saved'
    })
};

employeeCtrl.getEmployee = async (req, res)=> {
  // console.log(req.params);
  const employee = await Employee.findById(req.params.id);

    res.json(employee);
};

employeeCtrl.editEmployee =async(req, res)=> {
     const {id} = req.params;
     const employee = {
         name: req.body.name,
         position: req.body.position,
         office: req.body.office,
         salary: req.body.salary,
     }
   await Employee.findByIdAndUpdate(id, {$set: employee}, {new:true});
    res.json({
        'status':'Employee update'
   });

};

employeeCtrl.deleteEmployee =function () {
    
}


 module.exports = employeeCtrl;