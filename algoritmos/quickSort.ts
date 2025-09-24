const arr:number[] = [2,3,1,5,4,8,7,6,10];

const quicksort = (array:number[]):any => {

    if (array.length < 2){
        return array
    }

    let pivot:number = array[array.length - 1];
    let right:number[] = [];
    let left:number[] = [];

    for (let i = 0 ; i < array.length - 1 ; i ++){
        if (array[i] > pivot){
            right.push(array[i]);
        }

        else{
            left.push(array[i]);
        }
    }

    return [...quicksort(left) , pivot , ...quicksort(right)];
}
console.log (quicksort(arr));