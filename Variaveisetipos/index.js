function imprimirNome() {
  var lastName = "Rodio";
  var firstName = "Pedro";
  console.log(`Meu nome é ${firstName} ${lastName}\n`);
}

function tiposDeDados() {
  let um = "um";
  console.log("Os tipos dados podem ser de diferentes tipos:\n");
  console.log(typeof um);
  um = 1;
  console.log(typeof um);
  um = true;
  console.log(typeof um);
  um = ["Marcos", "Rodio"];
  console.log(typeof um);
}

function trabalhandoComString() {
  let nome = "Joao";
  let sobrenome = "Pedro";
  let exemplo = new String("Marcos Rodio");
  let concatenado = nome.concat(" ", sobrenome);
  let frase = "Java Script, é muito legal!";

  console.log(concatenado);
  console.log(`O tamanho da variável é de: ${concatenado.length} caracteres.`);
  console.log(typeof exemplo);
  console.log(nome[0], nome[1], nome[2], nome[3]);
  console.log(frase.split(","));
  console.log(frase.split(" "));
  console.log(frase.startsWith("J"));
  console.log(frase.includes("legal"));
}

function numeros(){
    let numero = 10;
    let resultado = 0;

    resultado = numero*11;
    console.log(resultado);
    console.log(resultado%2);
}



imprimirNome();
tiposDeDados();
trabalhandoComString();
numeros();