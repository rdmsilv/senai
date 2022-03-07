var listaDePecas = ['Amortecedor', 'Motor', 'Filtro de Ar']

let peso = 50
if (peso < 100) {
    console.log('A peça deve pesar no minimo 100g.');
}else{
    console.log('A peça possui o peso adequado.');
}

if (listaDePecas.length < 10) {
    console.log('Ainda tem espaço.');
}else{
    console.log('Não tem mais espaço.');
}

let nomePeca = "Disco de freio"

if (nomePeca.length > 3) {
    console.log("Nome da peça está adequada.");
}
else if(nomePeca.length == 0){
    console.log('Nome da peça precisa ter no minimo 3 caracteres.');
}