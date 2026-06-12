let moedas = 500;
let sustentabilidade = 50;
let nivel = 1;
let producao = 0;

let fazendas = 0;
let reservas = 0;
let solares = 0;

const mapa = document.getElementById("mapa");
const lista = document.getElementById("listaConquistas");

function atualizar(){

document.getElementById("moedas").innerText = moedas;
document.getElementById("sustentabilidade").innerText =
sustentabilidade + "%";

document.getElementById("nivel").innerText = nivel;

document.getElementById("producao").innerText =
producao;

document.getElementById("barraSustentabilidade").style.width =
sustentabilidade + "%";

verificarNivel();
salvar();

}

function construirFazenda(){

if(moedas < 100){
mostrar("❌ Moedas insuficientes");
return;
}

moedas -= 100;
fazendas++;

criarBloco("🚜");

mostrar("🚜 Fazenda construída");

atualizar();

}

function criarReserva(){

if(moedas < 70){
mostrar("❌ Moedas insuficientes");
return;
}

moedas -= 70;
reservas++;

sustentabilidade += 5;

criarBloco("🌳");

mostrar("🌳 Reserva criada");

atualizar();

}

function instalarSolar(){

if(moedas < 120){
mostrar("❌ Moedas insuficientes");
return;
}

moedas -= 120;
solares++;

sustentabilidade += 10;

criarBloco("☀️");

mostrar("☀️ Energia solar instalada");

atualizar();

}

function produzirAlimentos(){

if(fazendas === 0){
mostrar("🚜 Construa fazendas primeiro");
return;
}

let ganho =
(fazendas * 50) +
(solares * 15);

producao += ganho;
moedas += ganho;

mostrar("🌾 Produção realizada: +" + ganho);

atualizar();

}

function criarBloco(icone){

const bloco =
document.createElement("div");

bloco.classList.add("item");

bloco.innerHTML = icone;

mapa.appendChild(bloco);

}