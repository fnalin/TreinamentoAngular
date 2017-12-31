class Custom {

    //z é opcional
    //(f2 => replace no VS Code)
    constructor(private _x: number, private _y: number, private _z?: string) { }

    get x() {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    set y(value) {
        if (value < 0)
            throw new Error('Número inválido');

        this._y = value;
    }

    doAlgo: () => {
        //...
    }
}

let custom = new Custom(1, 2, 'xpto');
let x = custom.x; //-> get
//custom.z = 'abcde'; //-> private
custom.doAlgo();

let custom2 = new Custom(1, 2);
