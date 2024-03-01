
class  Demo10
{
    // default . optioanl 
    display(id, name ,desig="Clerk",pan?)
    { 
          console.log("ID :"+id);
          console.log("name :"+name);
          console.log("PAN :"+pan);
          console.log("Desig :"+desig);
    }
}
var d10= new Demo10();
d10.display(100,'Rama');
d10.display(200,'Raju','Developer','ABC123',);
