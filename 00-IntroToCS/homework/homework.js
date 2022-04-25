"use strict";

function BinarioADecimal(num) {
    // tu codigo aca  
    let decimal = 0;
    for (let n in num) {
        const long = num.length - 1;
        decimal += num[long - n] == 1 ? Math.pow(2, n) : 0;
    }
    return decimal;
}

function DecimalABinario(num) {
    // tu codigo aca
    let binario = [];
    while (num / 2 > 0) {
        if (num % 2 == 0) {
            binario.splice(0, 0, '0')
        } else {
            binario.splice(0, 0, '1')
        }
        num = Math.trunc(num / 2);
    }
    binario = binario.join('');
    return binario;

}

// No se pueden usar: 
// parseInt
// toString



module.exports = {
    BinarioADecimal,
    DecimalABinario,
};