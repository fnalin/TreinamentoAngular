let do1 = (x: number, y: number, z: string) => {
    //qualquer coisa
}

let do2 = (data: { x: number, y: number, z: string }) => {
    //qualquer coisa
}

interface Custom {
    x: number,
    y: number,
    z: string,
    doSomenthing: () => void
}

let do3 = (data: Custom) => { }