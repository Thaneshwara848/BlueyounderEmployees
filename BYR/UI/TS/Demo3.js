// function printHello(): void {
//     console.log('Hello!');
//   }
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//   function multiply(a: number, b: number) {
//     return a * b;
//   }
//   // the `?` operator here marks parameter `c` as optional
// function add(a: number, b: number, c?: number) {
//     return a + b + (c || 0);
//   }
//   function pow(value: number, exponent: number = 10) {
//     return value ** exponent;
//   }
// class  Demo3
// {
//     // default . optioanl 
//     display(id, name ,desig="Clerk",pan?)
//     { 
//           console.log("ID :"+id);
//           console.log("name :"+name);
//           console.log("PAN :"+pan);
//           console.log("Desig :"+desig);
//     }
// }
// var d3= new Demo3();
// d3.display(100,'Rama');
// d3.display(200,'Raju','Developer','ABC123');
//Rest paramanter c
// class Demo3{
//   sum(...numbers: number[]):number{
//     let total = 0;
//     numbers.forEach((num) => total += num);
//     return total;
//   }
// }
// var d3= new Demo3();
// console.log(d3.sum()); // 0
// console.log(d3.sum(10, 20)); // 30
// console.log(d3.sum(10, 20, 30)); // 60
var SpreadDemo = /** @class */ (function () {
    function SpreadDemo() {
        // spread operator doing the concat job
        //   let arr = [10, 20, 30];
        //   let arr2 = [40, 50];
        // arr = [...arr, ...arr2];
        // console.log(arr); // [ 10, 20, 30, 40, 50 ]
        var arr = ['a', 'b', 'c'];
        var arr2 = __spreadArray([], arr, true);
        arr2.push('Z');
        console.log(arr);
        console.log(arr2);
    }
    return SpreadDemo;
}());
var sd = new SpreadDemo();
