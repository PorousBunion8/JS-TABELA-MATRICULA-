function verificarTabela(){
    var tabela = document.getElementById('tabela');

    if (tabela == null) {
        tabela = document.createElement('table');
        var body = document.querySelector("body");
        tabela.id = 'tabela';
        body.appendChild(tabela);

        var thead = document.createElement('thead');
        tabela.appendChild(thead);

        var th1 = document.createElement('th');
        th1.innerText = 'matricula';
        thead.appendChild(th1);

        var th2 = document.createElement('th');
        th2.innerText = 'nome';
        thead.appendChild(th2);

        var th3 = document.createElement('th');
        th3.innerText = 'faltas';
        thead.appendChild(th3);

        var th4 = document.createElement('th');
        th4.innerText = 'NOTA B1';
        thead.appendChild(th4);

        var th5 = document.createElement('th');
        th5.innerText = 'NOTA B2';
        thead.appendChild(th5);

        var th6 = document.createElement('th');
        th6.innerText = 'MEDIA PARCIAL';
        thead.appendChild(th6);
    }


return tabela;

}

function inserirAlunoNaTabela(matricula) {
    var tabela = verificarTabela();

    var linha = tabela.insertRow(-1);

    linha.insertCell(0).innerText = matricula;
}

function inserirAluno(total_aulas) {
    var aluno = {};

    aluno.matricula = prompt('Digite a matrícula do aluno...');
    aluno.nome = prompt('Digite seu nome...');
    aluno.faltas = parseInt(prompt('digite as faltas do aluno...'))
    aluno.notab1 = parseFloat(prompt('digite a note b1...'))
    aluno.notab2 = parseFloat(prompt('digite a note b2...'))

        aluno.mediaparcial = (aluno.notab1 + aluno.notab2) / 2;

        var percentual_faltas = aluno.faltas / total_aulas;

        if(percentual_faltas > 0.25){
            aluno.situacao = 'Reprovado por falta';
        aluno.notapr = '-' 
        aluno.mediafinal = aluno.mediaparcial    
      }else{
        if(aluno.mediaparcial >= 7){
            aluno.mediafinal = aluno.mediaparcial
            aluno.situacao = 'aprovado'
            aluno.notapr = '-'

        }else {
            aluno.notapr = parseFloat(prompt('Digite sua nota da prova pr'));
            aluno.mediafinal = (aluno.mediaparcial + aluno.notapr) / 2;
            if (aluno.mediafinal >= 5) {
                aluno.situacao = 'Aprovado após prova de recuperação';
            } else {
                aluno.situacao = 'Reprovado';
        }
      }

    console.log(aluno);

    inserirAlunoNaTabela(aluno.matricula);
}
}
