let tabela = document.querySelector('#tabela_alunos')

tabela.addEventListener('dblclick', function(event){
    event.target.parentNode.classList.add('fadeOut')

    setTimeout(function(){
        event.target.parentNode.remove()
        calculaTotalAlunos()
    }, 260)
})