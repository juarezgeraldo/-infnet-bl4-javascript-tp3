function montaCabecalho(varHtml) {
    let tituloH1 = `<h1>Questão 01</h1>`
    let paragrafoH1 = `<p>
                            Crie um componente que tenha duas caixas de texto que só aceitam números e tenha os rótulos (label) valor
                            mínimo e valor máximo, checando sempre se o valor mínimo é menor que o valor máximo. O componente deve ainda
                            possuir um botão calcular que quando acionado deve contar e imprimir quantos números existem entre valor
                            mínimo e valor máximo (exclusives*) que sejam múltiplos de 2 e 3 simultaneamente. Não deve ser possível
                            calcular se faltar algum dos números.</br></br>
                            <strong>* exclusives - Ou seja, quantos números existem entre</strong> valor mínimo e valor máximo, <strong>excluindo o</strong> valor mínimo e valor máximo
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
                <label for="minimo" class="label_minimo">Valor mínimo:</label>
                <input type="number" id="minimo" name="minimo" required step 1>
                <label for="maximo">Valor máximo:</label>
                <input type="number" id="maximo" name="maximo" required step 1>
                <input type="button" value="Calcular" id="botao" onclick="processaQ1()">
            </div> 
            <div>
                <h2>Resultado</h2>
                <label for="qtdNumeros">Qtd. números:</label>
                <input type="text" id="qtdNumeros" name="qtdNumeros" disabled>
                <label for="numeros">Números:</label>
                <textarea id="numeros" name="numeros" disabled></textarea>
            </div>
        </form>`
    return
}


function contarNumeros(numMinimo, numMaximo) {
    let i = numMinimo + 1;
    let numeros = []
    for (i; i < numMaximo; i++) {
        let multiplo2 = i % 2;
        let multiplo3 = i % 3;
        if (multiplo2 == 0 && multiplo3 == 0) {
            numeros.push(i)
        }
    }
    return numeros
}

function processaQ1() {

    let numeroMinimo = parseInt(minimo.value)
    let numeroMaximo = parseInt(maximo.value)

    // if (minimo.valueAsNumber == NaN || maximo.valueAsNumber == NaN) {
    //     window.alert("É necessário informar o intervalo de valores.")
    //     return false
    // }

    if (numeroMinimo >= numeroMaximo) {
        window.alert("O valor mínimo deve ser menor que o valor máximo.")
        return false
    }

    let numeros = contarNumeros(numeroMinimo, numeroMaximo)

    let qtdNumerosHtml = document.getElementById("qtdNumeros")
    let numerosHtml = document.getElementById("numeros")

    qtdNumerosHtml.value = numeros.length
    numerosHtml.value = numeros

    return
}

let q1Html = document.getElementById("q1")
montaCabecalho(q1Html)
montaDetalhe(q1Html)
