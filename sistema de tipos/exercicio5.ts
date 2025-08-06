interface Produto {
    readonly id: number,
    readonly name: string,
    readonly quantidade: number,
    readonly preco: number,
    status: Boolean,
}


interface Carrinho {
    readonly id: number;
    itens: Produto[];
    valorTotal: number;
}

const produtos:Produto[] = [
    {id:0 , name: 'Lapis' , quantidade:2 , preco: 1.00, status: true},
    {id:1 , name: 'Lapiseira' , quantidade:3 , preco: 2.00, status: true},
    {id:2 , name: 'borracha' , quantidade:2 , preco: 1.50, status: true},
    {id:3 , name: 'madeira' , quantidade:0 , preco: 10.0, status: false},
    {id:4 , name: 'caneta' ,quantidade:4 , preco: 3.0, status: true},
    {id:5 , name: 'carro' , quantidade:0 , preco: 10000.00, status: false},
    {id:6 , name: 'baqueta' , quantidade:6 , preco: 20.00, status: true},
    {id:7 , name: 'viola' ,quantidade:7 , preco: 200.00, status: true},
    {id:8 , name: 'bateria' , quantidade:0 , preco: 3000.00, status: false},
    {id:9 , name: 'mouse' , quantidade:0 , preco: 150.00, status: false},
    {id:10 , name: 'caderno' , quantidade:9 , preco: 25.00, status: true}
]

const carrinho:Carrinho = {
    id:1,
    itens:[],
    valorTotal:0,
};

const adicionarProduto = (id:number) => {
    
    const produto = produtos.find((produto) => produto.id === id);
    const verificar = carrinho.itens.some((produto) => produto.id === id );

    if (!verificar){
        if (produto != undefined){
            carrinho.itens.push (produto)
            console.log ("Produto adicionado id: " , produto.id)
        }
        else{
            console.log ('Produto não encontrado.')
        }
    }

    else {
        console.log ('Produto não não existe');
    }
  
}


const deletarProduto  = (id:number) => {
    const produto = produtos.find((produto) => produto.id === id);
    const verificar = carrinho.itens.some((produto) => produto.id === id );

    if (verificar){
        if (produto != undefined){
            carrinho.itens =  carrinho.itens.filter((produto) => produto.id != id);
            console.log ("Produto deletado id: " , produto.id);
        }

        else {
            console.log ("Produto não encontrado.")
        }
    }


    else {
        console.log ("Produto não existe.")
    }
}



const atualizarQuantidade = (id , novaQuantidade) => {
    const produto = produtos.find((produto) => produto.id === id);
    const verificar = carrinho.itens.some((produto) => produto.id === id );

    if (verificar){
        if (produto != undefined){
            carrinho
        }
    }
}

//Continuar depois o exercicio !!!

adicionarProduto(1);
adicionarProduto(2);
adicionarProduto(3);
deletarProduto(3);
console.log(carrinho);