// function printHello(): void {
//     console.log('Hello!');
//   }

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




class SpreadDemo
{
  constructor()
  {
       // spread operator doing the concat job
    //   let arr = [10, 20, 30];
    //   let arr2 = [40, 50];
    // arr = [...arr, ...arr2];
    // console.log(arr); // [ 10, 20, 30, 40, 50 ]





    let arr = ['a','b','c'];
    let arr2= [...arr];
    arr2.push('Z');
    console.log(arr)
    console.log(arr2);
  }
}

var sd= new SpreadDemo();
