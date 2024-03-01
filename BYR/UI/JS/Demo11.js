var Demo11 = /** @class */ (function () {
    function Demo11() {
    }
    Demo11.prototype.display = function () {
        // const names: readonly string[] = ["Dylan"];
        var names = ["Rama"];
        names.push("Ravana");
    };
    return Demo11;
}());
var d1 = new Demo11();
d1.display(); // array read only 
