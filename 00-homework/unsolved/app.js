//clears input fields to enable display of selected input function
const clearTopElements = function () {
    document.getElementById('displayElements').style.display = 'none';
    document.getElementById('addElements').style.display = 'none';
    document.getElementById('verifyElements').style.display = 'none';
    document.getElementById('updateElements').style.display = 'none';
    document.getElementById('deleteElements').style.display = 'none';
}

//clears contents from previous nav button display, and renders new display of employee list.
const displayEmployees = function () {
    $('.content').empty();
    clearTopElements();
    document.getElementById('displayElements').style.display = 'inline';
    render();

}

//clears contents from previous nav button display, and renders new display of employee list.
const displayAddEmployee = function () {
    $('.content').empty();
    clearTopElements();
    document.getElementById('addElements').style.display = 'inline';
    render();
}

const displayVerifyEmployee = function () {
    $('.content').empty();
    clearTopElements()
    document.getElementById('verifyElements').style.display = 'inline';
    render();
}

const displayUpdateEmployee = function () {
    $('.content').empty();
    clearTopElements()
    document.getElementById('updateElements').style.display = 'inline';
    render();
}

const displayDeleteEmployee = function () {
    $('.content').empty();
    clearTopElements()
    document.getElementById('deleteElements').style.display = 'inline';
    render();
}


//displays employee list w/name, officenum, phonenum.
const render = function () {
    for (let index = 0; index < employeeList.length; index++) {
        const employee = employeeList[index];
        var employeeName = employee.name + "<br/>";
        var employeeOfficeNum = employee.officeNum + "<br/>";
        var employeePhoneNum = employee.phoneNum + "<br/>";
        var employeeHtml = employeeName + employeeOfficeNum + employeePhoneNum;
        $('.content').append(`<fieldset> ${employeeHtml} </fieldset>`); // groups related elements in a form and 
        //puts them in a box.

        console.log(employee);
    }
}
//user inputs name in values and the pushes it to employee list 
const addEmployee = function () {
    var employee = {};
    //replace this with the Id of the elements in addElements div
    employee.name = $('#name').val();
    employee.officeNum = $('#officenum').val();
    employee.phoneNum = $('#phonenum').val();
    employeeList.push(employee);
    displayEmployees();
}
//
const verifyEmployee = function () {
    //read from the input name'
    var handle = $('#verifyname').val();
    var result = employeeList.indexOfObject("name", handle);
    $('.content').empty();
    displayEmployees();
    if (result === -1) {
        $('.content').prepend("No");
    }
    else {
        $('.content').prepend("Yes");
    }
}
//gets the index of an employee in the employee list, returns -1 if employee does not exist
Array.prototype.indexOfObject = function arrayObjectIndexOf(property, value) {
    for (var i = 0, len = this.length; i < len; i++) {
        if (this[i][property] === value) {
            return i;
        }
    }
    return -1;
}

//if input value === to any keys in the object, update the specific key in the object.
const updateEmployee = function () {
    var employee = {};
    const i = employeeList.findIndex(e => e.name === $('#updateName').val())
    employeeList[i].officeNum = $('#updateOfficenum').val();
    employeeList[i].phoneNum = $('#updatePhonenum').val();
    displayEmployees();

}

//if value inputed is equal to a name in employeelist, delete(splice)by 1.
const deleteEmployee = function () {
    let employee = $('#deleteName').val();//pass the input value to id name

    for (let i = 0; i < employeeList.length; i++) {

        if (employee === employeeList[i].name) {
            employeeList.splice(i, 1)//delete employee by 1

        }

    }
    displayEmployees();
}

//displayEmployees();
$("#view").on("click", displayEmployees); //display all employee
$("#add").on("click", displayAddEmployee); //sidenav button displays all employee when clicked
$("#addEmp").on("click", addEmployee);//button id to add an employee name already in value, push into array
$("#verify").on("click", displayVerifyEmployee);//displays all employees when clicked
$("#verifyEmp").on("click", verifyEmployee);//button id to verify if an employee is on the list
$("#update").on("click", displayUpdateEmployee);//displays all employees when clicked
$("#updateEmp").on("click", updateEmployee); //button id to update employee info in the input value
$("#delete").on("click", displayDeleteEmployee);//displays all employees when clicked
$("#deleteEmp").on("click", deleteEmployee);//button id to delete emp entered in input value