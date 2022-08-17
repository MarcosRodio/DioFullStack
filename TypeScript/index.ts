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


const input = document.getElementById('input') as HTMLInputElement;
input.addEventListener('input',(event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
});

//gereric types

function adicionaApendiceLista<T>(array: any[], valor: T){
    return array.map(item => item + valor);
}
adicionaApendiceLista([1,2,3],1);


interface Iusuario {
    id: string;
    email: string;
}

interface IAdmin extends Iusuario {
    cargo?: 'gerente' | 'cordenador' | 'supervisor';
}

function redireciona(usuario: Iusuario | IAdmin ){
    if('cargo' in usuario){
        //redirecionar para a area de adm
    }
    // redirecionar para area de usuario
}

*/

interface ICachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

class meuCachorro implements ICachorro {
    nome ='Ze';
    idade = 14;
}