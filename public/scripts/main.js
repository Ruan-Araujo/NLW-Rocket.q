import modal from './modal.js';

const modalImp = modal();

//Mapeando a modal
const modalTitle = document.querySelector('.modal h2');
const modalDescricao = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');


//Pegar todos os butões com a classe check
const checkButtons = document.querySelectorAll('.actions a.check');
//Esse código abre a modal quando aperta no botão "marcar como lido" w fwcha quando clica em cancelar
checkButtons.forEach(button => {
    //Adicionar a escuta
    button.addEventListener('click', handleClick)   
});
//Pegar todos os botões com a class check
//Pegar quando o marcar como lido for clicado.
//abrir modal
//Fechar modal quando clicar em cancelar

const deleteButton = document.querySelectorAll('.actions a.delete');
//Aqui estou selecionando as classes delete do html
deleteButton.forEach(button =>{
    button.addEventListener('click', (event) => handleClick(event, false))
});
//Quando o botão delete for clicado, ele abre a modal

function handleClick(event, check = true){
    //Abrir modal
    event.preventDefault()
    //Aqui estou verificando se ouve clique na modal, caso esse evento aconteça estou 
    //usando esse if ternário para mostrar as 
    //opções possíveis para o programa dependendo
    //do que o usuário tiver escolhido
    const text = check ? 'Marcar como lida' : 'Excluir';
    const slug = check ? 'check' : 'delete';
    const roomId = document.querySelector('#room-id').dataset.id
    const questionId = event.target.dataset.id;
    //Aqui irei trabalhar o formulário
    const form = document.querySelector('.modal form');
    form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`);
    
    modalTitle.innerHTML = `${text} esta pergunta`;
    modalDescricao.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?` 
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove('red') : modalButton.classList.add('red');
    //Parei em 1:45
    modalImp.open()
}