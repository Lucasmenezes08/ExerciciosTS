let array:(string | number)[] = ['olá' , 10 , 14 , 'mundo' , 7 , '!']


const processarLista = (array: (string | number)[]) =>{
    let somaTotal:number = 0;
    let fraseFinal:string = "";


    for (let item of array){
        if (typeof(item) === 'number'){
            somaTotal += item;
        }
        if (typeof(item) === 'string')
            fraseFinal += item + ' ';
    }

    return `frase final: ${fraseFinal} | soma total: ${somaTotal}`
}

console.log(processarLista(array));