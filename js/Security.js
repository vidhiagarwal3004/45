class Security {

    constructor(){

        // Add code to create the input and button elements
        this.input = createInput("code1");
        this.button = createButton('CHECK');
         
        this.input2 = createInput("code2");
        this.button2 = createButton('CHECK');

        this.input3 = createInput("code3");
        this.button3 = createButton('CHECK');
    }

    display(){

        // Add code to make the buttons function as expected
        this.input.position(100,90);
        this.button.position(100,120);
         
        this.input2.position(700,190);
        this.button2.position(700,220);

        this.input3.position(100,270);
        this.button3.position(100,300);

        this.button.mousePressed(()=>{
            if(system.authenticate(accessCode1 , this.input.value()))
            {
                this.input.hide();
                this.button.hide();
                score++;
            }
           
          });

          this.button2.mousePressed(()=>{
            if(system.authenticate(accessCode2,this.input2.value()))
            {
                this.input2.hide();
                this.button2.hide();
                score++;
            }
           
          });
          this.button3.mousePressed(()=>{
            if(system.authenticate(accessCode3,this.input3.value()))
            {
                this.input3.hide();
                this.button3.hide();
                score++;
            }
           
          });
      







    }
}