function finalValueAfterOperations(operations: string[]): number {
    let sum = 0;
    let dec = 0;
    for (let operator of operations) {
        if (operator == "++X" || operator == "X++"){
            sum ++;
        }
        else if (operator == "--X" || operator == "X--"){
            dec --;
        }
    }

    return sum + dec;
};