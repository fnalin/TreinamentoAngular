class Custom {

    //z é opcional
    constructor(public x: number, private y:number, private z?:string) {}

    doAlgo: () => {
        //...
    }
}

let custom = new Custom(1, 2,'xpto');
custom.x = 1; //-> public
//custom.z = 'abcde'; //-> private
custom.doAlgo();

let custom2 = new Custom(1, 2);