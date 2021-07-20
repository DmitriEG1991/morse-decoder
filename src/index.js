const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(elem) {
    
    let mass = [];
    let res = "";
    let str2 = "";
    let el = elem.split("");
    let result = "";

    function first(expr){
        for(let i=9; i>-1; i-=2){
            let str = "";
            str += expr[i-1];
            str += expr[i];
            if(str == "10"){
                mass.unshift(".");
            }
            if(str == "11"){
                mass.unshift("-");
            }
        }
        str2 = mass.join("");
        mass = [];
        return str2;
    }
    function second(b){
        for(let key in MORSE_TABLE){
            if(key == b){
               res = MORSE_TABLE[key];
            }
        }
        return res; 
    } 

    for(let i=0; i<el.length; i+=10){
        let mass2 = el.slice(i, i+10);
        let stroka = mass2.join("");
        if(stroka == "**********"){
            result += " ";
        }else{
            result += second(first(stroka));
        }
    }
    return result;
}

module.exports = {
    decode
}
