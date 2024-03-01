var Demo8 = /** @class */ (function () {
    function Demo8(id, name, age) {
        console.log("ID :" + id);
        console.log("Name :" + name);
        console.log("Age :");
    }
    Demo8.prototype.display = function () {
        console.log("Hi method....!");
    };
    return Demo8;
}());
var d = new Demo8("Anup", "200", 35);
d.display();
