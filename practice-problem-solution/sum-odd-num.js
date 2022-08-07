// Write a function that will taka an array and calculate the sum of odd numbers greater than 10 and less than 50.

function oddSum(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        if((arr[i] % 2 == 1) && (arr[i] > 10 && arr[i] < 50)){
            sum += arr[i];
        }
    }
    return sum;
}

const values = [5, 56, 23, 44, 13, 90, 11];
console.log(oddSum(values))