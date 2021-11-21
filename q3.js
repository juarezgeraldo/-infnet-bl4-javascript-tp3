class Aluno {
    constructor(id,nome, nota, situacao) {
      this.id = id;
      this.nome = nome;
      this.nota = nota;
      this.situacao = situacao
    }
  }
  
function montaCabecalho(varHtml) {
    let tituloH1 = `<h1>Questão 03</h1>`
    let paragrafoH1 = `<p>
                            Crie um componente que possua um botão criar relatório que quando acionado deve imprimir um relatório de 
                            resultados da disciplina javascript para 20 alunos, no formato de tabela.</br></br>
                            - As notas deverão ser números inteiros entre 0 e 100, criadas aleatoriamente;</br>
                            - Cada aluno deve ser representado por um registro composto por nr e nota</br>
                            - Use uma função construtora chamada Aluno reveja conceitos aqui ou aqui, se quiser ousar um pouco veja classes;</br>
                            - Armazena a nota do aluno como uma variável privada do tipo symbol, use getters e setters para recuperar a informação.</br>
                            - Os registros devem ser armazenados em um array;</br>
                            - A impressão do relatório deve ter:</br>
                            <p>
                                - um título;</br>
                                - os resultados mostrados linha a linha no formato "Aluno nr xx - Nota yy [(A/RE)PROVADO]"; e</br>
                                - um rodapé com estatística final no formato "APROVADOS: XX (xx%)  |  REPROVADOS: YY (yy%)"</br>
                            </p>
                        </p>`
    let tituloH2 = `<h2>Desenvolvimento:</h2>`
    let paragrafoH2 = `<p>Pressione o botão para imprimir o resultado.</p>`
    varHtml.innerHTML = `${tituloH1} ${paragrafoH1} ${tituloH2} ${paragrafoH2}`
    return
}

function montaDetalhe(varHtml) {
    varHtml.innerHTML +=
        `<form>
            <div>
                <input type="button" value="Imprime resultados" id="botao" onclick="processaQ3()">
            </div> 
            <div>
                <h2>Resultado</h2>

                <div>
                    <table class="table" id="tabela">
                        <thead>
                            <tr>
                            <th>Id</th>
                            <th>Nome Aluno</th>
                            <th>Nota</th>
                            <th>Situação</th>
                            </tr>
                        </thead>
                        <tbody id="tabelaConteudo">
                        </tbody>
                        <tfoot id="tabelaFooter"></tfoot>
                        </table>
                    <div id="resultado"></div>
                </div>
            </div>
        </form>`
    return
}

function montaTabelaResultado(varHtml, notas){
    varHtml.innerHTML +=
            `<tr class="${notas.situacao}">
                <td>${notas.id}</td>
                <td>${notas.nome}</td>
                <td>${notas.nota}</td>
                <td>${notas.situacao}</td>
            </tr>`
}

function desenhaRodape(aprovados, reprovados){
    let footerHtml = document.getElementById("tabelaFooter")
    footerHtml.innerHTML += 
        `<tr>
            <td colspan="4">
                Alunos aprovados: ${aprovados}</br>
                Alunos reprovados: ${reprovados}
            </td>
        </tr>`
    
  }
  

function montaNotas(numero) {
    let notasAlunos = []
    for (let i = 1; i <= numero; i++) {
        let nome = Math.random().toString(36).substr(2,9)
        let nota = getRandomIntInclusive(0, 100)
        let situacao = nota >= 60 ? "Aprovado" : "Reprovado"
        let aluno = new Aluno(id=i, nome=nome, nota=nota, situacao=situacao)
        notasAlunos.push(aluno)
    }
    return notasAlunos
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function processaQ3() {
    let qtdAlunos = 20
    let notasAlunos = montaNotas(qtdAlunos)
    let aprovados = 0
    let reprovados = 0
    let tabelHtml = document.getElementById("tabelaConteudo")

    for(let notas of notasAlunos){
        montaTabelaResultado(tabelHtml, notas)
        aprovados += notas.nota >= 60 ? 1 : 0
        reprovados += notas.nota < 60 ? 1 : 0
    }

    desenhaRodape(aprovados, reprovados)
}


let q3Html = document.getElementById("q3")
montaCabecalho(q3Html)
montaDetalhe(q3Html)
