var listadePecas = ['filtro de ar', 'motor', 'amortecedor']

if (listadePecas.length < 10) {
  console.log('É possivel cadastrar mais peças')
} else {
  console.log('Não tem mais espaco na lista')
}

let peso = 50
if (peso < 100) {
  console.log('A peca deve pesar no mínimo 100g')
} else {
  console.log('A peca possui peso adequado')
}

let nomePeca = 'Disco de Freio'
if (nomePeca.length > 3) {
  console.log('Nome da peca está adequado para o cadastro')
} else {
  console.log('O nome deve ter mais de 3 caracteres, digite um nome adequado')
}
