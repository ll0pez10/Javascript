{
    let  position = {
        x:10,
        y:20,
        print: function(){
            console.log(`X: ${this.x}, Y: ${this.y}`);
        },
        myObject: {sweetProperty: "Hello Friends"}
    }

    let myPosition = position;

    console.log(position);
    console.log(myPosition);

    myPosition.x = 15;

    console.log(position);
    console.log(myPosition);

    position.print();

    function print(){
            console.log(`X: ${this.x}, Y: ${this.y}`);
    }
    print();

    position.myObject.sweetProperty;
}