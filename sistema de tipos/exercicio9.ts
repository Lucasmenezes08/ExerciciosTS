const removerDuplicatas = (array:any[]) => {
    let repetidos:any[] = [];
    let newArr:any[] = [];

    for (let i:number = 0 ; i < array.length - 1 ; i ++){
        if (array[i] === array[i + 1]){
            repetidos.push(array[i + 1]);
        }
        else {
            newArr.push(array[i]);
        }
    }

    return newArr;
}

const arr = [1, 2, 2 ,2 , 'number' , 3, 4, 4, 4, 5];

console.log(removerDuplicatas(arr));