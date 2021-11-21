function montaCabecalho(varHtml) {
    let tituloH1 = `<h1>Questão 05</h1>`
    let paragrafoH1 = `<p>
                        Crie um componente que possua 3 caixas de texto que só aceitam números e tenha os rótulos (label) lado A, lado B e lado C. 
                        O componente deve ainda possuir um botão calcular que quando acionado deve dizer se um triângulo formado por esses 3 lados 
                        é um triângulo equilátero, isósceles ou escaleno.
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
                <label for="ladoA" >Lado A:</label>
                <input type="number" id="ladoA" name="ladoA" required step 1>
                <label for="ladoB" >Lado B:</label>
                <input type="number" id="ladoB" name="ladoB" required step 1>
                <label for="ladoC" >Lado C:</label>
                <input type="number" id="ladoC" name="ladoC" required step 1>
                <input type="button" value="Calcular" id="botao" onclick="processaQ5()">
            </div> 
            <div>
                <h2>Resultado</h2>
                <label for="tipoTriangulo">Tipo de triângulo:</label>
                <input type="text" id="tipoTriangulo" name="tipoTriangulo" disabled>
            </div>
        </form>`
    return
}

function verificaTriangulo(lado1, lado2, lado3) {
    let msg = ""

    if ((lado1 + lado2) > lado3 && (lado2 + lado3) > lado1 && (lado3 + lado1) > lado2) {
        if ((lado1 == lado2) && (lado2 == lado3)) {
            msg = "É um triângulo equilátero"
        } else {
            if ((lado1 == lado2) || (lado2 == lado3) || (lado3 == lado1)) {
                msg = "É um triângulo isósceles"
            } else {
                msg = "É um triângulo escaleno"
            }
        }
    } else {
        msg = "Com os dados informados não é possível formar um triângulo!"
    }

    return msg
}


function processaQ5() {

    let lado1 = parseInt(ladoA.value)
    let lado2 = parseInt(ladoB.value)
    let lado3 = parseInt(ladoC.value)

    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
        window.alert("É necessário informar todos os valores solicitados.")
        return false
    }


    let resultadoHtml = document.getElementById("tipoTriangulo")
    resultadoHtml.value = verificaTriangulo(lado1, lado2, lado3)

    return
}

let q5Html = document.getElementById("q5")
montaCabecalho(q5Html)
montaDetalhe(q5Html)


