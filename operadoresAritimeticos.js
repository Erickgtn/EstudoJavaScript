let valor = 50;
console.log(valor + valor); // Soma de dois valores
console.log(valor - valor); // Subtração de dois valores
console.log(valor * valor); // Multiplicação de dois valores
console.log(valor / valor); // Divisão de dois valores
console.log(valor ** valor); // Potência

console.log(valor++);//incrementa só na proxima linha
console.log(++valor);//incrementa antes

//INCREMENTO
let valor2 = 1000;
valor2+=valor2 // é o mesmo que ==> valor2 = valor2 + valor2
console.log(valor2);

valor2-=valor2 // é o mesmo que ==> valor2 = valor2 - valor2
console.log(valor2);

//IGUALDADE
console.log( 1===1); //igualdade estrita ( verifica o valor e tipo) Recomendado
console.log('1'==1); //igualdade solta ( não recomendado)

//OPERADOR TERNÁRIO
let pontos = 101;
let tipo = pontos > 100 ? 'Premium':'Normal';
console.log (tipo);

//OPERADORES LÓGICOS
