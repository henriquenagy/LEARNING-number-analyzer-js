let comprimentoDoArray = 0 // Defina a variável globalmente
let numerosDigitados = [] // Declare o array aqui fora para a outra função também poder usar e não sobrepro um numero ao outro caso esteja dentro do add > else

function add() {
  let nber = document.getElementById('nber')
  let realnber = nber.value.trim() // Remove espaços em branco e verifica se é vazio ou igual a '0'
  let lista = document.getElementById('listnber')

  if (
    realnber === '' ||
    realnber > 100 ||
    realnber < 1 ||
    parseFloat(realnber) < 0 ||
    isNaN(parseFloat(realnber))
  ) {
    window.alert('[ERRO] Digite número entre 1 a 100!')
  } else if (comprimentoDoArray >= 15) {
    window.alert('Limite de 15 números atingido!')
  } else {
    function temDoisNumerosIguais(numero) {
      // Função para verificar se o número já foi digitado anteriormente
      return numerosDigitados.includes(numero)
    }

    if (temDoisNumerosIguais(parseFloat(realnber))) {
      window.alert('[ERRO] Número já foi digitado anteriormente!')
    } else {
      numerosDigitados.push(parseFloat(realnber)) // Adiciona o número ao array
      comprimentoDoArray = numerosDigitados.length

      //↓↓↓↓↓↓Somente para mostrar o número na tela↓↓↓↓↓↓
      let item = document.createElement('option') //é como se adiciona-se um item em cada linha do select manualmente no html
      item.text = `Valor ${realnber} adicionado. `
      lista.appendChild(item)
      nber.value = '' // Limpar o campo de entrada após adicionar o número à lista
    }
  }
}

function finalizar() {
  let showresult = document.getElementById('showresults')
  let Decrescente = numerosDigitados.slice().sort((a, b) => b - a)
  let Crescente = numerosDigitados.slice().sort((a, b) => a - b)
  let soma = numerosDigitados.reduce((total, atual) => total + atual, 0)
  let media = soma / comprimentoDoArray

  showresult.innerHTML += `Ao todo temos ${comprimentoDoArray} números cadastrados.<br>`
  showresult.innerHTML += `Os valores digitados foram: ${numerosDigitados}<br>`
  showresult.innerHTML += `O maior valor informado foi ${Decrescente[0]} <br>`
  showresult.innerHTML += `O menor valor informado foi ${Crescente[0]} <br>`
  showresult.innerHTML += `Somando todos os valores, temos ${soma} <br>`
  showresult.innerHTML += `A média dos valores digitados é ${media} <br>`
  showresult.innerHTML += `A ordem crescente é ${Crescente} <br>`
  showresult.innerHTML += `A ordem decrescente é ${Decrescente} <br>`
}

/*
Porque dentro de if (temDoisNumerosIguais(parseFloat(realnber))) não colocou o sinal de igual para dizer que temDoisNumerosIguais == realnber?
R: A comparação temDoisNumerosIguais(parseFloat(realnber)) na verdade não está comparando temDoisNumerosIguais com (parseFloat(realnber)).

O que está acontecendo é que temDoisNumerosIguais é uma função que retorna um valor booleano (true ou false) dependendo se o número já está presente no array numerosDigitados ou não. Portanto, você não precisa compará-la com (parseFloat(realnber)).

Ao invés disso, você precisa chamar a função temDoisNumerosIguais com o número que deseja verificar se está presente no array. A chamada da função temDoisNumerosIguais(parseFloat(realnber)) é correta porque você está passando o número parseFloat(realnber) como argumento para a função temDoisNumerosIguais. Essa função então retorna true se o número já estiver presente no array, ou false caso contrário.

Em resumo, não é necessário comparar a função temDoisNumerosIguais com o número parseFloat(realnber). Em vez disso, você deve chamar a função e passar o número como argumento, como está sendo feito corretamente no código original.*/

/*SOBRE O function temDoisNumerosIguais(numero):

No seu código, quando você chama a função temDoisNumerosIguais(parseFloat(realnber)), não é exatamente como você mencionou. Não há uma função temDoisNumerosIguais(3) sendo criada ou algo parecido.

Vamos analisar passo a passo o que acontece:

No momento em que o usuário digita um número e clica em adicionar (add() é chamada), o número digitado é capturado na variável realnber.
Em seguida, você chama a função temDoisNumerosIguais(parseFloat(realnber)).
Dentro da função temDoisNumerosIguais, o parâmetro numero recebe o valor parseFloat(realnber). Ou seja, ele recebe o número digitado pelo usuário convertido para um número de ponto flutuante.
A expressão numerosDigitados.includes(numero) verifica se o número numero (ou seja, o número digitado pelo usuário) está presente no array numerosDigitados.
Portanto, não é como se estivéssemos criando uma função temDoisNumerosIguais(3) ou algo assim. Em vez disso, estamos chamando a função temDoisNumerosIguais com um valor específico como argumento, e esse valor é comparado com os números armazenados no array numerosDigitados.*/

/*Quase isso! Vamos esclarecer alguns pontos. Quando o usuário digita o número 3 no input, ele é capturado e armazenado na variável realnber (ou qualquer outra variável que você defina para representar o número digitado). Depois, essa variável é passada como argumento para a função temDoisNumerosIguais.

Então, supondo que o usuário tenha digitado o número 3 e a função temDoisNumerosIguais seja chamada com esse número como argumento, o código seria mais ou menos assim:

function temDoisNumerosIguais(numero) {
  return [1, 2, 3, 4, 5].includes(numero);
}

let numeroDigitado = 3; // Supondo que o usuário digitou o número 3
console.log(temDoisNumerosIguais(numeroDigitado)); // Saída: true
No código acima:

A função temDoisNumerosIguais é definida para receber um parâmetro numero.
Quando a função é chamada com temDoisNumerosIguais(numeroDigitado), o valor da variável numeroDigitado (que é 3 neste exemplo) é passado como argumento para a função.
Dentro da função, a expressão [1, 2, 3, 4, 5].includes(numero) verifica se o número passado como argumento está presente no array [1, 2, 3, 4, 5].
Portanto, a função temDoisNumerosIguais(3) retorna true porque o número 3 está presente no array [1, 2, 3, 4, 5].*/
