class Demo1
{
    constructor()
    {
        //let name:number=100;
        //let name:string="Praveen";
      //  name=100;
        //console.log("Constrctor...!"+name)
        //console.log("Constrctor...!"+typeof(name))
        const fruits:any=["Apple","Banana","Cherry"];
        for(var i=0;i<fruits.length;i++)
        {
            console.log(fruits[i])
        }
        fruits.push("PineApple");
        fruits.push(100);
        console.log("================")
        for(var i=0;i<fruits.length;i++)
        {
            console.log(fruits[i])
        }
    }
}
var d1= new Demo1();