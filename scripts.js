let chave = "cebcd482eda57fa9a6714c1c2ba91885";

function colocarNaTela(dados) {
  console.log(dados);

  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
  //vai no HTML, procura o cidade e troca o que tem dentro do cidade, os dados. Procura onde esta o nome no console
  document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
  //vai no HTML, procura o temp e troca o que tem dentro do temp, os dados. Procura onde esta a temp no console
  document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
  //vai no HTML, precisa trocar o '04n' do src e procura no console onde está essa informação, ai no caso esta dentro de weather e na posição 0 e em icon
  document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
  //vai no HTML, procura a umidade e ele troca o que tem dentro da umidade. Procura onde esta a umidade no console, no caso esta dentro do main e na humidity
}

async function buscarCidade(cidade) {
  let dados = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cidade +
      "&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric"
  ).then((resposta) => resposta.json());

  colocarNaTela(dados);
  // await = espere
  // fetch = acessa servidores
  // formato que o JavaScript entende
}

function cliqueinobotao() {
  let cidade = document.querySelector(".input-cidade").value;

  buscarCidade(cidade);
}

//Clica no botão, ele chama a função Cliqueinobotao(), vai no input e pega o que esta la dentro, então precisa passar a cidade para o servidor

//Math.floor => arredondar valores
