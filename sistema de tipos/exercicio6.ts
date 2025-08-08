let numero:number[] = [1,2,3,4,5,6,7,8,9];
let pares:number[] = [];
let impares:number[] = []


for (let number of numero){
    if (number % 2 === 0){
        pares.push(number);
    }   

    else {
        impares.push(number)
    }
}


console.log('pares' , pares)
console.log('impares' , impares)




