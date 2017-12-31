export class Custom {

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