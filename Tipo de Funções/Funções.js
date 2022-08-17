const soma = function (a, b) {
  return a + b;
};

console.log(soma(1, 2));
console.log(soma(2, 3));

//função autoinvocável
(function () {
  let name = "Marcos Rodio";
  return name;
})();

const soma1 = (function (a, b) {
  return a + b;
})(10, 2);

console.log(soma1);

//funcções Callback - uma função é passada como argumento para outra função

const calc = function (operacao, num1, num2) {
  return operacao(num1, num2);
};

const soma3 = function (num1, num2) {
  return num1 + num2;
};

const sub = function (num1, num2) {
    return num1 - num2;
};

const resultadoSoma = calc(soma3, 1 , 2);
const resultadoSub = calc(sub, 10,10);

console.log(resultadoSoma);
console.log(resultadoSub);