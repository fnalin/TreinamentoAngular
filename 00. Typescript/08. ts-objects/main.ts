class Custom {
    x: number;
    y: number;
    z: string;
    doAlgo: () => {
        //...
    }
}

let custom = new Custom();
custom.x = 1;
custom.y = 2;
custom.z = 'xpto';
custom.doAlgo();


let teste = (data: Custom) => { 
    //...
    //data.x
}

teste(custom);

