class Custom {
    x: number;
    y: number;
    z: string;

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
custom.doAlgo();

let custom2 = new Custom(1, 2);