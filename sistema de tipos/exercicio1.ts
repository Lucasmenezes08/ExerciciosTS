const calcular = (a: number , b: number , operacao: string):any => {
    switch (operacao){
        case 'soma':
            return a + b;
        
        case 'subtracao':
            return Math.abs(a - b);

        case 'multiplicacao':
            return a * b;

        case 'divisao':
            return a / b;

        default :
            return 'Operação inserida está com nome incorreto!'
    }
}



console.log (calcular(4 , 5 , 'soma'));
console.log (calcular(4 , 5 , 'subtracao'));
console.log (calcular(4 , 5 , 'multiplicacao'));
console.log (calcular(4 , 5 , 'divisao'));
console.log (calcular(4 , 5 , 'divisaqqo'));