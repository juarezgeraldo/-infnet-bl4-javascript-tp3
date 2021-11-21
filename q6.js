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
    let paragrafoH2 = `<p>Informe os dados solicitados.</p>`
    varHtml.innerHTML = `${tituloH1} ${paragrafoH1} ${tituloH2} ${paragrafoH2}`
    return
}

function montaDetalhe(varHtml) {
    varHtml.innerHTML +=
        `<form>
            <div id="nao_logado"> 
                <input id="username" type="text"> 
                <input id="password" type="password"> 
                <button onclick="logar()">Login</button><br/><br/>
                <div>Novo Usuario</div> 
                <input id="new_user" type="text"> 
                <input id="new_password" type="password">
                <button onclick="criarUsuarioNovo()">Criar</button>	
            </div> 
            <div id="messages"></div>	
            <div id="logado" style="visibility:hidden"> 
                <div>Logado</div>
                <button onclick="deslogar()">Deslogar</button> 
            </div>
        </form>`
        return
}

function isLogged(){
	return window.localStorage.getItem("login")
}

function deslogar(){
	naoLogadoElement = document.getElementById('nao_logado');
	logadoElement = document.getElementById('logado');

	window.localStorage.removeItem("login")
	naoLogadoElement.style.visibility = 'visible'
	logadoElement.style.visibility = 'hidden'
}

function logar() {

	naoLogadoElement = document.getElementById('nao_logado');
	logadoElement = document.getElementById('logado');
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
			logadoElement.style.visibility = 'visible'
			break;
		}
	}
}

function criarUsuarioNovo() {
	let username = document.getElementById('new_user').value
	let password = document.getElementById('new_password').value;
	let messages = document.getElementById('messages');
	let users = []
	if(window.localStorage.getItem("users")){
		users = JSON.parse(window.localStorage.getItem("users"))
	}

	users.push({username: username, password: password})
	window.localStorage.setItem("users", JSON.stringify(users));
	messages.innerHTML = "<div>Usuario criado!</div>";
}

let q6Html = document.getElementById("q6")
montaCabecalho(q6Html)
montaDetalhe(q6Html)


