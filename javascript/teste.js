function DolarparaReal(Real, Dolar) {
    return Real / Dolar
}
document.getElementById('Real')
var Real = parseInt(prompt('Quanto você tem em real R$?'), 10);

var Dolar = 6.08;
var Total = Real / Dolar;

alert('O valor que você possui em real é R$: ' + Real + ' e na cotação atual seria: ' + Total.toFixed(2) + ' dólares.');