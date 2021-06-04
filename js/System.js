class System{

    constructor(){

       
    }

 authenticate(actualcode,enteredcode)
  {
     if(actualcode === enteredcode.toUpperCase())
     {
         return true;
     } else
     {
         return false;
     }

  }
    

}