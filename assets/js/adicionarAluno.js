calculaTotalAlunos()

let botaoAdicionar = document.querySelector('#form_alunos_botao')
botaoAdicionar.addEventListener('click', function(evento){
    evento.preventDefault()

    // armazena no vetor aluno os dados do formulário pegos pelo querySelector
    let aluno = obterValoresForm(document.querySelector('#form_alunos'))

    // pega os erros pelo validaAluno() e os exibe se houver algum, interrompendo
    // o programa automaticamente
    let erros = validaAluno(aluno)
    if(erros.length > 0){
        exibeMensagemErro(erros)
        return
    }

    // limpa a tela de quaisquer erros remanecentes de operações anteriores
    let mensagensErro = document.querySelector("#mensagens_erro")
    mensagensErro.innerHTML = ''

    adicionaAluno(aluno)

    calculaTotalAlunos()
})

function obterValoresForm(form){
    let aluno = {
        nome: form.nome.value,
        turma: form.turma.value,
        dataMat: form.data_matricula.value,
        status: form.status_pagamento.value
    }
    return aluno
}

function validaAluno(aluno){
    let erros = []

    if(aluno.nome.length == 0){
        erros.push('O nome não pode estar em branco')
    }
    if(aluno.turma == 'Selecione uma turma'){
        erros.push('A turma não pode estar em branco')
    }
    if(aluno.dataMat.length == 0){
        erros.push('A data de matrícula não pode estar em branco')
    }
    if(aluno.status == 'Selecione uma opção de status'){
        erros.push('O status de pagamento não pode estar em branco')
    }
    if(Date.parse(aluno.dataMat) > Date.now()){
        erros.push('A data da matrícula não pode ultrapassar o dia atual')
    }

    return erros
}

function exibeMensagemErro(erros){
    let mensagensErro = document.querySelector('#mensagens_erro')
    mensagensErro.innerHTML = ''

    erros.forEach(function(erros){
        let mensagem = document.createElement('li')
        mensagem.textContent = erros
        mensagensErro.appendChild(mensagem)
    })
}

// adiciona a row criada na tabela
function adicionaAluno(aluno){
    let alunoTr = montarTr(aluno)
    let tabela = document.querySelector('#tabela_alunos')

    tabela.appendChild(alunoTr)
}

// cria uma fileira (table row) com os dados do aluno na tabela
function montarTr(aluno){
    let alunoTr = document.createElement('tr')
    alunoTr.classList.add('aluno')

    alunoTr.appendChild(montarTd(aluno.nome))
    alunoTr.appendChild(montarTd(aluno.turma))
    alunoTr.appendChild(montarTd(aluno.dataMat))
    alunoTr.appendChild(montarTd(aluno.status))

    return alunoTr
}

// cria uma td (dado da tabela)
function montarTd(dado){
    let td = document.createElement('td')
    td.textContent = dado

    return td
}