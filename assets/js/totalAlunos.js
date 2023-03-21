let totalAlunosElement = document.querySelector('#total_alunos')

// atribui a quantidade de linhas da classe 'aluno' ao elemento HTML que vai
// exibir o total de alunos
function calculaTotalAlunos(){
    let alunos = document.querySelectorAll('.aluno')
    totalAlunosElement.innerHTML = alunos.length
}