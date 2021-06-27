export default function modal(){
    
    const modalWrapper = document.querySelector('.modal-wrapper');
    const cancelButton = document.querySelector('.button.cancel');
    cancelButton.addEventListener('click', close);

    function open(){
        //Funcionalidade de ativar a classe active na modal
        modalWrapper.classList.add('active');
    }
    function close(){
        //Funcionalidade de desativar a classe active na modal. 
        modalWrapper.classList.remove('active');
    }

    return{
        open,
        close
    };
};

