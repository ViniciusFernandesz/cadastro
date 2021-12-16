var listaPecas = ["disco de freio", "correia dentada","bomba de combustivel"]

if (listaPecas.length < 10) {
    // é possivel cadastrar
    console.log("É possivel cadastrar mais peças.")
}else{
    //Não é possivel cadastrar
    console.log("Número máximo de itens na lista atingido.")
}
//Peso da peca
let pesoTotal = 50;
if (pesoTotal <100) {
    console.log("Peso minimo não atingido, a peça devepesar no minimo 100g")
}else{
    console.log("Prosseguir com cadastro, peça possui peso adequado.")
}
//Minimo 3 caracteres para cadastro
let nomePeca ="bomba de combustivel"
if (nomePeca.lenght>3) {
    console.log("Nome da peça está adequado para o cadastro.")
} else if(nomePeca.length ==0) {
    console.log("O nome da peça não pode ser vazio")
}else{
  console.log("Nome da peça deve possuir ao menos 3 caracteres. Digite um nome adequado.")
}
switch(nomePeca.length){
    case 0 :
        console.log ('O nome não pode ser vazio.')
        break;

    case 1 :

    case 2 :
    
    case 3 :
    console.log("nome deve possuir mair de 3 caracteres, digite um nome adequado")

    default :
        console.log ('O nome da peça está adequado para o cadastro')
        break;
}