/*function soma(a: number, b: number){
    return a+b;
}

let ab = soma(1,1);
console.log(ab);


interface Ianimal{
    nome: string;
    tipo: "terreste" | "aquatico";
    domestico: boolean;
}

interface Ifelino extends Ianimal{
    visaoNoturna: boolean;
}

const animal: Ianimal ={
    nome: "elefante",
    tipo: "terreste",
    domestico: false,
}

const leao: Ifelino = {
    nome: "leao",
    tipo: "terreste",
    visaoNoturna: true,
    domestico: false,
}

interface Icanino extends Ianimal {
    porte: 'pequeno' | 'medio' | 'grande';
}

type Idomestico = Icanino | Ifelino ; // utilizamos o type para juntar interfaces

const zeca: Idomestico = {
    domestico: true,
    nome: 'zeca',
    porte: 'medio',
    tipo:"terreste",
}
*/
var input = document.getElementById('input');
input.addEventListener('input', function (event) {
    var i = event.currentTarget;
    console.log(i.value);
});
