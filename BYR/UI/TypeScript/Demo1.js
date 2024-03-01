var Demo1 = /** @class */ (function () {
    function Demo1() {
        //let name:number=100;
        //let name:string="Praveen";
        //  name=100;
        //console.log("Constrctor...!"+name)
        //console.log("Constrctor...!"+typeof(name))
        var fruits = ["Apple", "Banana", "Cherry"];
        for (var i = 0; i < fruits.length; i++) {
            console.log(fruits[i]);
        }
        fruits.push("PineApple");
        fruits.push(100);
        console.log("================");
        for (var i = 0; i < fruits.length; i++) {
            console.log(fruits[i]);
        }
    }
    return Demo1;
}());
var d1 = new Demo1();
