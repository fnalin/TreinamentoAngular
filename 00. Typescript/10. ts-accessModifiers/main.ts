class Custom {
    private x: number;
    private y: number;
    private z: string;

    //z é opcional
    constructor(x: number, y:number, z?:string) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    doAlgo: () => {
        //...
    }
}

let custom = new Custom(1, 2,'xpto');
//custom.z = 'abcde'; //-> private
custom.doAlgo();

let custom2 = new Custom(1, 2);