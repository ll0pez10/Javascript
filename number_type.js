{
    let x = 5;
    console.log(Number.MAX_SAFE_INTEGER);
    console.log(Number.isSafeInteger(x));

    var slicesOfPizza = 10;
    console.log(slicesOfPizza % 4.25);

    var precedence1 = 5 + 3 * 12 - 20/ 10;
    var precedence2 = 5 + (3 * 12) - (20/ 10);
    var precedence3 = (5 + 3) * (12 - 20)/ 10;
    
    console.log(precedence1);

    /*
    +
    -
    *
    /
    %
    */
}