// #DOM

// botões
let maisLento = document.querySelector("img#maisLento");
let volta10 = document.querySelector("img#volta10");
let play = document.querySelector("img#play");
let pause = document.querySelector("img#pause");
let avanca10 = document.querySelector("img#avanca10");
let maisRapido = document.querySelector("img#maisRapido");

// controle
let controle = document.querySelector("div.controle");

// video
let video = document.querySelector("video");

// player
let player = document.querySelector("div.container-player");

// #Evento

// clique
maisLento.addEventListener("click", btnMaisLento);
volta10.addEventListener("click", btnVolta10);
play.addEventListener("click", btnPlay);
pause.addEventListener("click", btnPause);
avanca10.addEventListener("click", btnAvanca10);
maisRapido.addEventListener("click", btnMaisRapido);

// foco
player.addEventListener("mouseover", apareceControle);
player.addEventListener("mouseout", desapareceControle);

// #Funcao

// controle
function apareceControle(){
    controle.style.visibility = "visible";
    console.log("Apareceu");
}

function desapareceControle(){
    controle.style.visibility = "hidden";
    console.log("Desapareceu");
}

// botao
function btnMaisLento(){
    video.playbackRate -= 0.1;
    console.log("Mais Lento");
}

function btnVolta10(){
    video.currentTime -= 10;
    console.log("Voltou");
}

function btnPlay(){
    video.play();
    console.log("Deu play");
}

function btnPause(){
    video.pause()
    console.log("Pausou");
}

function btnAvanca10(){
    video.currentTime += 10;
    console.log("Avançou");
}

function btnMaisRapido(){
    video.playbackRate += 0.1;
    console.log("Mais Rápido");
}