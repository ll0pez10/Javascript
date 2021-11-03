(function(){
    //IIFE - immediately invoked function expression 
    var age = 5;
})();

//nao acessivel pelo window object, mas ainda global
let y = 10;

{
    //block, maneira moderna de criar variaveis locais
    let y = 10;
    const x = 20;
    {
        let y = 6;
        console.log(y);
    }

    console.log(y,x);
    //anexando a variavel ao window object
    var z = 100;
}