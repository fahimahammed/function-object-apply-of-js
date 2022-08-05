function isLeapYear(year){
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        return "Leap Year";
    }
    else{
        return "Not Leap Year";
    }
}

console.log(isLeapYear(1900));