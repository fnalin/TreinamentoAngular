var num1 = 1;
let num2 = 2;

function facaAlgoComOVar(){
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('N. final: ' + i);
}

function facaAlgoComOLet(){
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    //Não transpila
    //console.log('N. final: ' + i);
}

