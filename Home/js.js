function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function Efeito(){
  document.getElementById("efeito").innerHTML = "D|";
  await sleep(100);
  document.getElementById("efeito").innerHTML = "De|";
  await sleep(100);
  document.getElementById("efeito").innerHTML = "Des|";
  await sleep(100);
  document.getElementById("efeito").innerHTML = "Dese|";
  await sleep(100);
  document.getElementById("efeito").innerHTML = "Desen|";
  await sleep(100);
  document.getElementById("efeito").innerHTML = "Desenv|";
  await sleep(100);
  document.getElementById("efeito").innerHTML = "Desenvo|";
  await sleep(100);
  document.getElementById("efeito").innerHTML = "Desenvol|";
  await sleep(100);
  document.getElementById("efeito").innerHTML = "Desenvolv|";
  await sleep(100);
  document.getElementById("efeito").innerHTML = "Desenvolvi|";
  await sleep(100);
  document.getElementById("efeito").innerHTML = "Desenvolvid|";
  await sleep(100);
  document.getElementById("efeito").innerHTML = "Desenvolvido|";
  await sleep(100);
  document.getElementById("efeito").innerHTML = "Desenvolvido |";
  await sleep(100);
  document.getElementById("efeito").innerHTML = "Desenvolvido p|";
  await sleep(100);
  document.getElementById("efeito").innerHTML = "Desenvolvido po|";
  await sleep(100);
  document.getElementById("efeito").innerHTML = "Desenvolvido por|";
  await sleep(100);
  document.getElementById("efeito").innerHTML = "Desenvolvido por |";
  await sleep(100);
  document.getElementById("efeito").innerHTML = "Desenvolvido por s|";
  await sleep(100);
  document.getElementById("efeito").innerHTML = "Desenvolvido por so|";
  await sleep(100);
  document.getElementById("efeito").innerHTML = "Desenvolvido por sob|";
  await sleep(100);
  document.getElementById("efeito").innerHTML = "Desenvolvido por sobr|";
  await sleep(100);
  document.getElementById("efeito").innerHTML = "Desenvolvido por sobra|";
  await sleep(100);
  document.getElementById("efeito").innerHTML = "Desenvolvido por sobral|";
  await sleep(100);
  document.getElementById("efeito").innerHTML = "Desenvolvido por sobralM";
  Barra();
}

async function Barra(){
  await sleep(600);
  document.getElementById("efeito").innerHTML = "Desenvolvido por sobralM|";
  await sleep(600);
  document.getElementById("efeito").innerHTML = "Desenvolvido por sobralM";
  Barra()
}

async function Load(){
  await sleep(5000);
  animaTexto();
}

async function Logo(){
  document.getElementById("logo").innerHTML = "<a href='#'style='text-decoration: none;'><h id='sobral'>sobral</h><h id='m'>M</h></a>";
}

async function animaTexto(){
  document.getElementById("texto").innerHTML = "um, dois";
  await sleep(1250);
  document.getElementById("texto").innerHTML = "feijão com arroz";
  await sleep(1250);
  document.getElementById("texto").innerHTML = "três, quatro";
  await sleep(1250);
  document.getElementById("texto").innerHTML = "feijão no prato";
  await sleep(1250);
  document.getElementById("texto").innerHTML = "cinco, seis";
  await sleep(1250);
  document.getElementById("texto").innerHTML = "falar em inglês";
  await sleep(1250);
  document.getElementById("texto").innerHTML = "sete, oito";
  await sleep(1250);
  document.getElementById("texto").innerHTML = "comer biscoito";
  await sleep(1250);
  document.getElementById("texto").innerHTML = "nove, dez";
  await sleep(1250);
  document.getElementById("texto").innerHTML = "comer pastéis";
  await sleep(1250);
  document.getElementById("texto").innerHTML = "";
  await sleep(1250);
  document.getElementById("texto").innerHTML = "reiniciando";
  await sleep(250);
  document.getElementById("texto").innerHTML = "reiniciando.";
  await sleep(250);
  document.getElementById("texto").innerHTML = "reiniciando..";
  await sleep(250);
  document.getElementById("texto").innerHTML = "reiniciando...";
  await sleep(1500);
  animaTexto()
}
