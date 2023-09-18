function tocaSom(Seletoraudio){
const elemento = document.querySelector(Seletoraudio).play() 
if (elemento && elemento.localName === 'audio') {
    elemento.play();
}
else {
    alert('Elemento não encontrado');
}
}
const listaDeTeclas = document.querySelectorAll('.tecla'); 
for(let a=0; a<=listaDeTeclas.length; a++){
    const tecla = listaDeTeclas[a];
    const instrumento = tecla.classList[1];
    const iDaudio = `#som_${instrumento}`

    tecla.onclick=funcion(){
        tocaSom(iDaudio);
    }
    tecla.onkeydown = funcion(evento){
        if(evento.code === 'Space'|| evento.code === 'Enter')
        {
            tecla.classList.add('ativa')
        }
        else{
            alert('elemento não encontrado')
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
}    