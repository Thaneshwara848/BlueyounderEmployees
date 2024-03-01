// access modifiers 
class A 
{
  public  a=100;
   private  b=200;
   protected c=300;
    display()
    {
        console.log(this.a);
        console.log(this.b);
        console.log(this.c);
    }
}
class B  extends A
{
    constructor(){
        super(); 
    }
    display()
    {
        console.log(this.a);
        //console.log(this.b);
        console.log(this.c);
    }
}
class C  
{
    
    display()
    {
        var d3= new A();
        console.log(d3.a);
        //console.log(this.b);
        //console.log(d3.c);
    }

}
