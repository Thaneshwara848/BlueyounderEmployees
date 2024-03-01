// class obj 
// inheriatnce 
// static 
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, jobTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        Employee.headcount++;
    }
    Employee.getHeadcount = function () {
        return Employee.headcount;
    };
    Employee.headcount = 0;
    return Employee;
}());
var john = new Employee('Praven', 'Kuamr', 'Front-end Developer');
var jane = new Employee('Giri', 'Kuamr', 'Back-end Developer');
console.log(Employee.headcount); // 2
Employee.getHeadcount; // 2
