/*
function longestCommonPrefix(strs: string[]): string {
    let prefix: string[] = [];

    for (let i:number = 0 ; i < strs.length - 1 ; i ++){
        for (let j:number = strs[i].length ; j < strs[i].length - 1 ; j ++){
            if (strs[i][j] == strs[i + 1][j + 1]){
                prefix.push(strs[i][j], strs[i + 1][j + 1])
            }
            
        }
    }

    return prefix.join('');
};

*/

// EM ANDAMENTO!