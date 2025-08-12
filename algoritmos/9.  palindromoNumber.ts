function isPalindrome(x: number): boolean {
    let stringNumber:string = x.toString(); 
    let stringReverse:string[] = [];

    for (let i = stringNumber.length - 1 ; i >= 0 ; i --){
        stringReverse.push(stringNumber[i]);
    }
    
    if (stringNumber == stringReverse.join('')){
        return true;
    }    
    
    return false;
};