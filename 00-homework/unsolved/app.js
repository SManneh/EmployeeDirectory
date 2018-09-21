$("#view").on("click"), //display all employees
$("#add").on("click"), //add an employee name, push into array
$("#verify").on("click"),//verify if an employee is on the list
$("#update").on("click"), //update employee info 
$("#delete").on("click"),//delete employee name from list bracket notation


for (let i = 0; i < employeeList.length; i++) {
    let employee = employees[i];
