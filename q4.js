function montaCabecalho(varHtml) {
    let tituloH1 = `<h1>Questão 04</h1>`
    let paragrafoH1 = `<p>
                        Crie um componente que possua 3 caixas de texto que só aceitam números e tenha os rótulos (label) 
                        Quantidade de números, valor mínimo e valor máximo. O componente deve ainda possuir um botão calcular 
                        que quando acionado deve criar um array com quantidade de números aleatórios não repetidos e ordená-los. 
                        Os números devem estar entre valor mínimo e valor máximo (inclusives, ou seja incluindo o valor mínimo e valor máximo). 
                        Lembre-se que para calcular quantidade de números deve ser menor que a soma de valor mínimo e valor máximo.
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
                <label for="qtd" >Quantidade de números:</label>
                <input type="number" id="qtd" name="qtd" required step 1>
                <label for="inicio" >Número inicial:</label>
                <input type="number" id="inicio" name="inicio" required step 1>
                <label for="final" >Número final:</label>
                <input type="number" id="final" name="final" required step 1>
                <input type="button" value="Calcular" id="botao" onclick="processaQ4()">
            </div> 
            <div>
                <h2>Resultado</h2>
                <label for="numerosEncontrados">Resultado:</label>
                <textarea id="numerosEncontrados" name="numerosEncontrados" disabled></textarea>
            </div>
        </form>`
    return
}

function montaNumeros(qtd, inicio, final) {
    let numeros = []
    let i = 1
    while (i <= qtd) {
        let aleatorio = getRandomIntInclusive(inicio, final)
        if (numeros.indexOf(aleatorio) < 0) {
            numeros.push(aleatorio)
            i++
        }
    }
    return numeros
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function processaQ4() {

    let qtdNumeros = parseInt(qtd.value)
    let numeroInicial = parseInt(inicio.value)
    let numeroFinal = parseInt(final.value)

    if (isNaN(qtdNumeros) || isNaN(numeroInicial) || isNaN(numeroFinal)) {
        window.alert("É necessário informar todos os valores solicitados.")
        return false
    }

    if (numeroInicial >= numeroFinal) {
        window.alert("O número inicial deve ser menor que o numero final.")
        return false
    }
    if(qtdNumeros > (numeroFinal - numeroInicial)){
        window.alert("A quantidade de números não pode ser maior que o intervalo solicitado")
        return false
    }

    let numeros = montaNumeros(qtdNumeros, numeroInicial, numeroFinal);
    numeros.sort(function (a, b) { return a - b })

    let numerosHtml = document.getElementById("numerosEncontrados")
    numerosHtml.value = numeros

    return
}

let q4Html = document.getElementById("q4")
montaCabecalho(q4Html)
montaDetalhe(q4Html)


