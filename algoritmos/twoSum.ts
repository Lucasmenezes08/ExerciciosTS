function twoSum(nums: number[], target: number): number[] {
    let arr:number[] = [];
    for (let i:number = 0 ; i < nums.length ; i ++){
        for (let j:number = i + 1 ; j < nums.length ; j++){
            if ((nums[i] + nums[j]) == target){
                arr.push(i , j);
            }
        }
    }

    return arr;
};


console.log (twoSum([3,2,3] , 6))