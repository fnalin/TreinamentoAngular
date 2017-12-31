import { Custom } from './custom';

let custom = new Custom(1, 2, 'xpto');
let x = custom.x; //-> get
//custom.z = 'abcde'; //-> private
custom.doAlgo();

let custom2 = new Custom(1, 2);
