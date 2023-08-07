function abrirModalXL(){
    const modal = document.getElementById('janela-modal-xl')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janela-modal-xl'){
            modal.classList.remove('abrir')
        }
    })
}


function abrirModalIs(){
    const modal = document.getElementById('janela-modal-is')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janela-modal-is'){
            modal.classList.remove('abrir')
        }
    })
}

