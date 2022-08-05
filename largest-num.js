// find largest num

function findLargest(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        console.log(num1);
        // 5 , 4, 2
    }
    else if(num2 > num1 && num2 > num3){
        console.log(num2);
        // 3, 5, 1
    }
    else{
        console.log(num3);
    }
}

// findLargest(2, 3, 1);
// findLargest(5, 8, 1);
// findLargest(5, 8, 10);



function findLargestNum(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return(num1); 
        // 5 , 4, 2
    }
    else if(num2 > num1 && num2 > num3){
        return(num2);
        // 3, 5, 1
    }
    else{
        return(num3);
    }
}

console.log(findLargestNum(4, 67, 23));
console.log(findLargestNum(400, 67, 23));
console.log(findLargestNum(4, 67, 230));