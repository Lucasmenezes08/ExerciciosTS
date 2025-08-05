type tupla = [string , number , boolean] 


const exibirDetalhesProduto = (produto: tupla):any => {

    const disponivel = produto[2];

    if (disponivel) {
        return 'Disponível';
    } else {
        return 'Indisponível';
    }
}


const produto1: tupla = ["Notebook Gamer", 7500.50, true];
const produto2: tupla = ["Mouse Vertical", 350.00, false];

console.log(exibirDetalhesProduto(produto1))
console.log(exibirDetalhesProduto(produto2))
