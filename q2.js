function montaCabecalho(varHtml) {
    let tituloH1 = `<h1>Questão 02</h1>`
    let paragrafoH1 = `<p>
                        Crie um componente que tenha uma caixa de texto que só aceita números e tenha o rótulo (label) Calcular o fatorial de. 
                        O componente deve ainda possuir um botão calcular que quando acionado deve calcular o fatorial do número digitado, imprimido o resultado e o tempo necessário para a execução. 
                        (Dica: usar o objeto javascript Date)</br></br>
                        - resultado deve ser mostrado no formato 53! = XXXXXX (yyy milisegundos);</br>
                        - código deve calcular o fatorial e não apenas imprimir uma string com a resposta.
                        </p>`
    let tituloH2 = `<h2>Desenvolvimento:</h2>`
    let paragrafoH2 = `<p>Informe os dados solicitados.</p>`
    varHtml.innerHTML = `${tituloH1} ${paragrafoH1} ${tituloH2} ${paragrafoH2}`
    return
}

function montaDetalhe(varHtml) {
    varHtml.innerHTML +=
        `<form>
            <div>
                <label for="numeroCalc" >Numero para cálculo do fatorial:</label>
                <input type="number" id="numeroCalc" name="numeroCalc" required step 1>
                <input type="button" value="Calcular" id="botao" onclick="processaQ2()">
            </div> 
            <div>
                <h2>Resultado</h2>
                <label for="resultado">Resultado do fatorial:</label>
                <input type="text" id="resultado" name="resultado" disabled>
            </div>
        </form>`
    return
}

function calculaFatorial(numero) {
    let resultado = numero
    for (let i = 1; i < numero; i++) {
        resultado = resultado * i
    }
    return resultado
}

function processaQ2() {

    let numero = parseInt(numeroCalc.value)

    if (isNaN(numero)) {
        window.alert("É necessário informar o valor solicitado.")
        return false
    }

    horaInicio = new Date().getMilliseconds();
    let resultado = calculaFatorial(numero);

    horaFinal = new Date().getMilliseconds();
    tempoDecorrido = horaFinal - horaInicio

    let resultadoHtml = document.getElementById("resultado")

    resultadoHtml.value = `${numero}! = ${resultado}  -  ${tempoDecorrido} milisegundos`

    return
}

let q2Html = document.getElementById("q2")
montaCabecalho(q2Html)
montaDetalhe(q2Html)
