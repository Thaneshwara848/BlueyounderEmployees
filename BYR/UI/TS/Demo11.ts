export  class Demo11
{
   private  name ="ABi"
    constructor()
    {
        console.log("Demo 6 const")
    }
    display(){
            console.log("Method from Demo6 ")
    }
}
class Demo123 extends Demo11
{
    constructor()
    {
         super();
        console.log("Demo 123 const")
    }
    display(){
            console.log("Method from Demo123 ")
    }
}