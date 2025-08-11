const eh_palindromo = (palavra:string):void => { 
    const strArr:string = palavra.split('').join('');
    let strInversa:string[] = [];
    

    for (let i: number = palavra.length - 1 ; i >= 0 ; i --){
        strInversa.push(strArr[i]);
    }

    if (strArr === strInversa.join('')){
        console.log("É palindromo");
    }

    else {
        console.log ("Não é palindromo");
    }
}


eh_palindromo('arara');
eh_palindromo('palhaço');
eh_palindromo('lucas');
eh_palindromo('reinier')
