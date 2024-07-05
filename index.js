// Write your solution in this file!
let employee = {
    name: 'Amos OLuoch',
    streetAddress: '123 Main St'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      employee,
      [key]: value
    };
  }

  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  

  
  
