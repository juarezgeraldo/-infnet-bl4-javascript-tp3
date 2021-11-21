function montaCabecalho(varHtml) {
    let tituloH1 = `<h1>Questão 06</h1>`
    let paragrafoH1 = `<p>
                        Criar um componente para criação de usuário e login em aplicação(sign up/ sign in).</br>
                        No 1o cenário, antes de estar logado, o visitante se depara com o formulário de login ou de criação de usuário. 
                        Se for feito o login com sucesso, o componente deve levar ao cenário 2, se falhar ele deve alertar o usuário e 
                        voltar ao início do cenário 1. Se o usuário optar por criar um usuário, o componente deve criar o registro de um novo 
                        usuário e voltar para início do cenário 1.</br>
                        No cenário 2, após logado, mostrar apenas um texto de logado no componente e um botão (ou link) para deslogar, retornando ao início do cenário 1.</br>
                        Deve ser possível criar múltiplos usuários e, se fechada, a página não pode perder os registros de usuários  armazenados.</br>
                        </p>`
    let tituloH2 = `<h2>Desenvolvimento:</h2>`
    let paragrafoH2 = `<p></p>`
    varHtml.innerHTML = `${tituloH1} ${paragrafoH1} ${tituloH2} ${paragrafoH2}`
    return
}

function montaDetalhe(varHtml) {
    varHtml.innerHTML +=
        `<form>
            <table class="table" id="tabela">
                <tbody id="tabelaLogin">
                    <tr>
                        <td class="tdLogin">
                            <div id="nao_logado" style="visibility:visible">
                                <p>Se já tem um login, entre com ele</p>
                                <label for="username" >Login:</label>
                                <input id="username" type="text"> 
                                <label for="password" >senha:</label>
                                <input id="password" type="password"> 
                                <input type="button" value="Login" id="botaoLogar" onclick="logar()"></br></br>
                                <p>Se não possui um login, então crie um</p>
                                <label for="new_user" >Login:</label>
                                <input id="new_user" type="text"> 
                                <label for="new_password" >senha:</label>
                                <input id="new_password" type="password">
                                <input type="button" value="Criar usuário" id="botaoCriar" onclick="criarUsuarioNovo()">
                            </div> 
                        </td>
                        <td class="tdLogin">
                            <div id="logado" style="visibility:hidden"> 
                                <p>Usuário logado com sucesso</p>
                                <input type="button" value="Sair" id="botaoSair" onclick="deslogar()">
                            </div>
                            <div id="criado" style="visibility:hidden"> 
                                <p>Usuário criado com sucesso</p>
                                <input type="button" value="Voltar" id="botaoVoltar" onclick="deslogar()">
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>`
        return
}

function isLogged(){
	return window.localStorage.getItem("login")
}

function deslogar(){
	naoLogadoElement = document.getElementById('nao_logado');
	logadoElement = document.getElementById('logado');
	criadoElement = document.getElementById('criado');

	window.localStorage.removeItem("login")
	naoLogadoElement.style.visibility = 'visible'
	logadoElement.style.visibility = 'hidden'
	criadoElement.style.visibility = 'hidden'

	document.getElementById('username').value = ''
	document.getElementById('password').value = ''
	document.getElementById('new_user').value = ''
	document.getElementById('new_password').value = ''
}

function logar() {

	naoLogadoElement = document.getElementById('nao_logado');
	logadoElement = document.getElementById('logado');
	criadoElement = document.getElementById('criado');

	let username = document.getElementById('username').value
	let password = document.getElementById('password').value
	let users = []
	if(window.localStorage.getItem("users")){
		users = JSON.parse(window.localStorage.getItem("users"))
	}
	for(let i = 0; i < users.length; i++) {
		if(users[i].username == username && users[i].password ==password){
			window.localStorage.setItem("login", document.getElementById('username').value)
			naoLogadoElement.style.visibility = 'hidden'
			criadoElement.style.visibility = 'hidden'
			logadoElement.style.visibility = 'visible'
			return
		}
	}
    window.alert("Usuário e/ou senha incorretos")
}

function criarUsuarioNovo() {
	let username = document.getElementById('new_user').value
	let password = document.getElementById('new_password').value;

    let users = []
	if(window.localStorage.getItem("users")){
		users = JSON.parse(window.localStorage.getItem("users"))
	}

    for (let i = 1; i < users.length; i++){
        if (username == users[i].username){
            window.alert ("Usuario já cadastrado anteriormente!");
            return
        }
    }

	users.push({username: username, password: password})
	window.localStorage.setItem("users", JSON.stringify(users));

	naoLogadoElement = document.getElementById('nao_logado');
	logadoElement = document.getElementById('logado');
	criadoElement = document.getElementById('criado');

    naoLogadoElement.style.visibility = 'hidden'
    criadoElement.style.visibility = 'visible'
    logadoElement.style.visibility = 'hidden'
}

let q6Html = document.getElementById("q6")
montaCabecalho(q6Html)
montaDetalhe(q6Html)


