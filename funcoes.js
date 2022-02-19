// Verbo + Substantivo
let corSite = "Preto";
function resetarCor(){ // Função sem parametro
    corSite = "";
};
function resetarCor2(corSite){ // função com parametro
    if(corSite == "Preto"){ 
        console.log("Branco");
    }else{
        console.log( "Azul");
    }
};
resetarCor2();

//Função sem retorno
function Nome(){
    console.log('Eric');

}
Nome();

//Função com retorno
function restoDivisao(valor){
    return valor%3;
}
console.log(restoDivisao(5));