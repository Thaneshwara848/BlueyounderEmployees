interface Rectangle {
    height: number,
    width: number,
    place : string
    // constructor(){}:noConstructor 
    // abc(){}
    abc();

};
  class Xyz  implements Rectangle
  {
    height: number=100;
    width: number=100;
    place: string="Banalore";
    abc() {
        console.log("Implementation")
    }
  }
  var x = new Xyz()
  x.abc();
