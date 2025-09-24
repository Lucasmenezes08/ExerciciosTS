const fatorial = (number:number):number => {
    if (number == 0 || number == 1){
        return 1;
    }    
    return number * fatorial(number - 1)   
}

console.log(fatorial(4));