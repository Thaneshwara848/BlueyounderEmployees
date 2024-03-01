var Demo10 = /** @class */ (function () {
    function Demo10() {
    }
    // default . optioanl 
    Demo10.prototype.display = function (id, name, desig, pan) {
        if (desig === void 0) { desig = "Clerk"; }
        console.log("ID :" + id);
        console.log("name :" + name);
        console.log("PAN :" + pan);
        console.log("Desig :" + desig);
    };
    return Demo10;
}());
var d10 = new Demo10();
d10.display(100, 'Rama');
d10.display(200, 'Raju', 'Developer', 'ABC123');
function numberss() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
numberss(1, 2, 3, 4, 5, 7);
numberss(1, 2, 3);
