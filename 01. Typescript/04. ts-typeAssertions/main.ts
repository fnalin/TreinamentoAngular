let msg:any = 'abc';
let endWithC = (<string>msg).endsWith('c');
let endWithC2 = (msg as string).endsWith('c');