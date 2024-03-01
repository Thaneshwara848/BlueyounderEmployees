// class obj 
// inheriatnce 
// static 
class Employee {
    static count: number = 0;
    constructor(
        private fn: string,
        private ln: string,
        private desig: string) {
        Employee.count++;
    }
    public static getcount() {
        return Employee.count;
    }
}
let j1= new Employee('Praven', 'Kuamr', 'Front-end Developer');
let j2 = new Employee('Giri', 'Kuamr', 'Back-end Developer');
console.log(Employee.count); // 2
Employee.getcount; // 2
// abstacrt  Demo 
//https://www.typescripttutorial.net/typescript-tutorial/interfaces-vs-abstract-classes/
