function tocaSom(Seletoraudio){
const elementodeaudio = document.querySelector(Seletoraudio).play() 
if(elementodeaudio===null){alert('elemento não encontrado');}
if(elementodeaudio!=null && elementodeaudio==='audio'){ elementodeaudio.play();
}
}
const listaDeTeclas = document.querySelectorAll('.tecla'); 
for(let a=0; a<=listaDeTeclas.length; a++) 
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
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
    