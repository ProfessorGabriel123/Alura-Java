function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento===null)
        {
            alert('elemento não encontrado');
        }

    if(elemento!=null && elemento==='audio')
        { 
        elemento.play();
        }
    }
    const listaDeTeclas = document.querySelectorAll('.tecla'); 
    for(let contador=0; a<=listaDeTeclas.length; contador++) {
        const tecla = listaDeTeclas[contador]
        const instrumento = tecla.classList[1]
        const iDaudio = `#som_${instrumento}`

        tecla.onclick = function () {
            tocaSom(idAudio);
        }
        tecla.onkeydown=funcion(evento)
        {
            if(evento.code === 'Space'||evento.code === 'Enter')
            {
                tecla.classList.add('ativa')
            }
            else{
                alert('elemento não encontrado')
            }
        }
        tecla.onkeyup = function()
        {
            tecla.classList.remove('ativa')
        }
    }