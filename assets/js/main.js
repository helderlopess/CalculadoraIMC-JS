//captura do formulario
const form = document.querySelector("#formulario");
//listener de acao do botao e stopper do submit padrao
form.addEventListener("submit", function (event) {
	event.preventDefault();
	//coleta dos inputs
	const inputPeso = event.target.querySelector("#peso");
	const inputAltura = event.target.querySelector("#altura");

	//conversao dos valores para number
	const peso = Number(inputPeso.value);
	const altura = Number(inputAltura.value);

	//testando se os dados passados são validos, caso contrario retorna em cada caso a validade de cada valor passado
	if (!peso) {
		setResultado("Peso Invalido", false);
		return;
	}
	if (!altura) {
		setResultado("Altura Invalida", false);
		return;
	}

	//chamando a funçao que ira calcular o IMC
	const imc = getImc(peso, altura);
	const nivelImc = getNivelImc(imc);
	const msg = `Seu IMC é ${imc} (${nivelImc})`;

	setResultado(msg, true);
	//console.log(peso, altura, imc, nivelImc);
});

//calculando o range dos valores do imc
function getNivelImc(imc) {
	const nivel = [
		"Abaixo do peso",
		"Peso normal",
		"Sobrepeso",
		"Obesidade grau 1",
		"Obesidade grau 2",
		"Obesidade grau 3",
	];
	//para evitar ficar usando range vamos fazer a logica invertida com o intuito de usar apenas os primeiros valores de cada escala so que do maior para o menor
	if (imc >= 39.9) {
		return nivel[5];
	}
	if (imc >= 34.9) {
		return nivel[4];
	}
	if (imc >= 29.9) {
		return nivel[3];
	}
	if (imc >= 24.9) {
		return nivel[2];
	}
	if (imc >= 18.5) {
		return nivel[1];
	}
	if (imc < 18) {
		return nivel[0];
	}
}

//calculando o valor o imc
function getImc(peso, altura) {
	const imc = peso / altura ** 2;
	return imc.toFixed(2);
}

//funcao para criação dos paragrafos do innerText
function criaP() {
	const p = document.createElement("p");
	return p;
	//p.innerHTML = 'qualquer coisa';
}

//o resultado sera exibido abaixo do botao exibir
function setResultado(msg, isValid) {
	const resutlado = document.querySelector("#resultado");
	resultado.innerHTML = ``;

	const p = criaP();

	if (isValid) {
		p.classList.add("paragrafo-resultado");
	} else {
		p.classList.add("bad");
	}

	p.innerHTML = msg;
	resultado.appendChild(p);
}
