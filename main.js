//nossa função tem que armazernar os comando de som 
function tocaSomPom() {
document.querySelector('#som_tecla_pom').play() 
}
//AO pesquisar o botão com o document.querySelector('.tecla_pom') e clicar nele, .onclick, ele vai puchar a referencia tocaSomPom que é a função criada inicialmente
function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play()
}
// Ao usar as duas varras voce esta comentando
document.querySelector('.tecla_pom');
//document. serve para encontrar o arquivo
//Se for uma Teg coloque o nome da teg direto EX document.querySelector('h1')
//Se for o nome da Classe coloque o ponto junto EX document.querySelector('.tecla_pom')
//Se for um Id utilise o # Ex document.querySelector('# tecla_pom')
document.querySelectorAll('.tecla');
/*Este comando pesquesa todos os elementos com a classe tecla*/

const listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas[0].onclick=tocaSomPom;