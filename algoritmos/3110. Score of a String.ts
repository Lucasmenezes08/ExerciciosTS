function scoreOfString(s: string): number {
    let result:number = 0;

    for (let i = 0 ; i < s.length - 1 ; i ++){
        const currentAscii = s.charCodeAt(i);
        const nextAscii = s.charCodeAt(i + 1)
        
        result += Math.abs(currentAscii - nextAscii); 
    }

    return result;
};