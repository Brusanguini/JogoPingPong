//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 15;
let raio = diametroBolinha/2;

//variáveis da raquete
let xRaquete1 = 5;
let yRaquete1 = 150;
let comprimentoRaquete1 = 10;
let alturaRaquete1 = 90;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 2;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
}

function mostraBolinha (){
  circle(xBolinha, yBolinha, diametroBolinha);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio > width || 
     xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(){
  rect(xRaquete1, yRaquete1, comprimentoRaquete1, alturaRaquete1);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete1 -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete1 += 10;
  }
}

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete1 + comprimentoRaquete1 && yBolinha - raio < yRaquete1 + alturaRaquete1 && yBolinha + raio > yRaquete1){
    velocidadeXBolinha *= -1;
  }
}