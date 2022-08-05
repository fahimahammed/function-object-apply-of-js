// console.log(6 % 2); 
// console.log(68 % 2); 
// console.log(8 % 2); 
// console.log(110 % 2); 


// check even or odd with no return
function oddEven(num){
    if(num % 2 == 0){
        console.log("It is even!");
    }
    else{
        console.log("It is odd!");
    }
}

// oddEven(67);
// oddEven(68);

// check even or odd with return 
function checkEvenOdd(num){
    if(num % 2 == 0){
        //console.log("Even");
        return "It is even"; 
    }
    else{
        return "It is odd";
    }
}

console.log(checkEvenOdd(72));
