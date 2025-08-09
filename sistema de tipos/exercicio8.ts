const array:number[] = [1 , 2, 4, 5 , 10 , 24 , 56 , 43 , 32, 54 , 87 , 90 , 87 , 100 , 102 , 43 ,25];

const maiorNumero = (array:number[]):number => {
    let maiorNumero:number = 0;
    let i:number = 0 ;
    let j:number = 0 ;
    let flag:boolean = false;
    

    while(!flag){
        if (i == array.length - 1){
            flag = true;
        }

        if (array[i] > array[j]){
            maiorNumero = array[i]
            j ++;
        }

        else {
            i ++;
        }
    }

    return maiorNumero;
    
}

console.log(maiorNumero(array));