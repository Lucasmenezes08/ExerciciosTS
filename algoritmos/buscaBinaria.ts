function search(nums: number[], target: number): number {
    let inicio:number = 0 ;
    let final:number = nums.length - 1;

    while (inicio <= final){
        let meio = Math.floor((inicio + final)/2);

        if (nums[meio] < target) {
            inicio = meio + 1;
        }

        else if (nums[meio] > target) {
            final = meio - 1;
        }

        else{
            return meio;
        }
    }
    return -1;
};