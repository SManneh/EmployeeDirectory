
const displayEmployees = function (){
    $('.content').empty();
    render();
         
}

const displayAddEmployee = function(){
    $('.content').empty();
    clearTopElements();
    document.getElementById('addElements').style.display = 'inline';
    render();
}

const displayVerifyEmployee = function(){
    $('.content').empty();
    clearTopElements()
    document.getElementById('verifyElements').style.display = 'inline';
    render();
}

const clearTopElements = function(){
    document.getElementById('addElements').style.display = 'none';
    document.getElementById('verifyElements').style.display = 'none';
}

const render = function(){
    for (let index = 0; index < employeeList.length; index++) {
        const employee = employeeList[index];
        var employeeName = employee.name + "<br/>";
        var employeeOfficeNum = employee.officeNum + "<br/>";
        var employeePhoneNum = employee.phoneNum + "<br/>";
        var employeeHtml = employeeName + employeeOfficeNum + employeePhoneNum;
        $('.content').append(`<fieldset> ${employeeHtml} </fieldset>`);
        
        console.log(employee);
    }   
}

const addEmployee = function(){
    var employee = {};
    //replace this with the Id of the elements in addElements div
    employee.name = $('#name').val();
    employee.officeNum = 5;
    employee.phoneNum = "213-944-3332";
    employeeList.push(employee);
    displayEmployees();
}

const verifyEmployee = function(){
    //read from the input name'
    var handle = $('#verifyname').val();
    var result = employeeList.indexOfObject("name",handle);
    $('.content').empty();
    displayEmployees();
    if(result === -1){
        $('.content').prepend("No");
    }
    else{
        $('.content').prepend("Yes");
    }
}

Array.prototype.indexOfObject = function arrayObjectIndexOf(property, value) {
    for (var i = 0, len = this.length; i < len; i++) {
        if (this[i][property] === value){
            return i;
        } 
    }
    return -1;
}

//displayEmployees();
$("#view").on("click", displayEmployees); //display all employee
$("#add").on("click", displayAddEmployee); //add an employee name, push into array
$("#addEmp").on("click", addEmployee)
$("#verify").on("click", displayVerifyEmployee);//verify if an employee is on the list
$("#verifyEmp").on("click", verifyEmployee);//verify if an employee is on the list
//$("#update").on("click"); //update employee info 
//$("#delete").on("click");//delete employee name from list bracket notation